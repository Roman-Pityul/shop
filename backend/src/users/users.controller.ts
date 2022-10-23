import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ObjectId } from "mongoose";
import { CreateUsersDto } from "./dto/create-users.dto";
import { UserService } from "./users.service";

@Controller('/users')
export class UserController {

  constructor(private userService: UserService) { }

  @Get('/')
  getAllUsers() {
    return this.userService.getAllUsers()
  }

  @Post('/create')
  create(@Body() dto: CreateUsersDto) {
    return this.userService.createUser(dto)
  }

  @Post('/getOneUser')
  findById(@Param('id') id: ObjectId) {
    return this.userService.findById(id)
  }
}