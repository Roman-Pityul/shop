import { HttpException, HttpStatus, Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose";
import * as bcrypt from 'bcrypt'
import{ JwtService} from '@nestjs/jwt'
import { Model } from "mongoose"
import { CreateUsersDto } from "./dto/create-users.dto"
import { LoginUserDto } from "./dto/login-user.dto"
import { User, UserDocument } from "./schema/users.schema"

@Injectable()
export class UserService {

  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private readonly jwtService: JwtService
    )  { }

  async registration(dto: CreateUsersDto): Promise<User> {
    const { email, password, name, role } = dto
    const candidate = await this.userModel.findOne({ email })
    if (candidate) {
      throw new HttpException('Пользователь уже создан', HttpStatus.FORBIDDEN)
    }
    const hashedPassword = await bcrypt.hash(password, 12)
    const user = new this.userModel({ email, password: hashedPassword, name, role })
    await user.save()
    throw new HttpException('Пользователь зарегистрирован', HttpStatus.CREATED)
  }

  async login(dto: LoginUserDto) {
    const user = await this.userModel.findOne({ email: dto.email })
    if (!user) {
      throw new HttpException('Не корректные данные для входа', HttpStatus.FORBIDDEN)
    }
    const checkPass = await bcrypt.compare(dto.password, user.password)
    if (!checkPass) {
      throw new HttpException('Не корректные данные для входа', HttpStatus.FORBIDDEN)
    }
    const tokens = await this.issueTokenPair(user.id)
    return JSON.stringify({...tokens, userId: user._id, userName: user.name })
  }

  async issueTokenPair(userId: string) {
		const data = { _id: userId }

		const refreshToken = await this.jwtService.signAsync(data, {
			expiresIn: '15d',
		})

		const accessToken = await this.jwtService.signAsync(data, {
			expiresIn: '1h',
		})

		return { refreshToken, accessToken }
	}
}