import { ApiProperty } from "@nestjs/swagger"

import { userRoles } from "../schema/users.schema"

export class CreateUsersDto {
  @ApiProperty()
  readonly email: string

  @ApiProperty()
  readonly password: string

  @ApiProperty()
  readonly name: string

  @ApiProperty()
  readonly role: userRoles
}