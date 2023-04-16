import { Body, Controller, Get, Post } from "@nestjs/common"
import { CreateUsersDto } from "./dto/create-users.dto"
import { LoginUserDto } from "./dto/login-user.dto"
import { UserService } from "./users.service"

@Controller('/users')
export class UserController {

  constructor(private userService: UserService) { }

  @Post('/registration')
  registration(@Body() dto: CreateUsersDto) {
    return this.userService.registration(dto)
  }

  @Post('/login')
  login(@Body() dto: LoginUserDto) {
    return this.userService.login(dto)
  }
}