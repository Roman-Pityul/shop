import { ApiProperty } from "@nestjs/swagger"

export class FilesDto {
  @ApiProperty()
  readonly fileName: string

  @ApiProperty()
  readonly fileLink: string
}