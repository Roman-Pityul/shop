import { ApiProperty } from "@nestjs/swagger"

export class ProductsDto {
  @ApiProperty()
  readonly category: string

  @ApiProperty()
  readonly img: string

  @ApiProperty()
  readonly price: string
  
  @ApiProperty()
  readonly sale: string

  @ApiProperty()
  readonly description: string
}