import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { CreateUsersDto } from "./dto/create-users.dto";
import { User, UserDocument } from "./schema/users.schema";


@Injectable()
export class UserService {

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

  async getAllUsers(): Promise<User[]> {
    const users = await this.userModel.find()
    return users
  }

  async createUser(dto: CreateUsersDto): Promise<User> {
    const user = await this.userModel.create(dto)
    return user
  }

  async findById(id: ObjectId): Promise<User> {
    const user = await this.userModel.findById(id)
    return user
  }

}