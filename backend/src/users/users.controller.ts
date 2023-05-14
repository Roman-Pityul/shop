import { Body, Controller, Get, Post } from "@nestjs/common"
import { CreateUsersDto } from "./dto/create-users.dto"
import { LoginUserDto } from "./dto/login-user.dto"
import { UserService } from "./users.service"
import { ApiBody, ApiTags } from "@nestjs/swagger"

@Controller('/users')
@ApiTags('users')
export class UserController {

  constructor(private userService: UserService) { }

  @Post('/registration')
  @ApiBody({type: CreateUsersDto})
  registration(@Body() dto: CreateUsersDto) {
    return this.userService.registration(dto)
  }

  @Post('/login')
  @ApiBody({type: LoginUserDto})
  login(@Body() dto: LoginUserDto) {
    return this.userService.login(dto)
  }
}