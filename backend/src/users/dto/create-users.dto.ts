import { ApiProperty } from "@nestjs/swagger"

export class CreateUsersDto {
  @ApiProperty()
  readonly email: string

  @ApiProperty()
  readonly password: string

  @ApiProperty()
  readonly name: string

  @ApiProperty()
  readonly isAdmin: boolean
}