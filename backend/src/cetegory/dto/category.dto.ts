import { ApiProperty } from "@nestjs/swagger"

export class CategoryDto {
    @ApiProperty()
    readonly name: string

    @ApiProperty()
    readonly path: string
}