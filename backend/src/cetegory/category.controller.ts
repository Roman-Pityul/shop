import { Body, Controller, Get, Post } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { CategoryDto } from "./dto/category.dto";
import { ApiBody, ApiTags } from "@nestjs/swagger";


@Controller('/category')
@ApiTags('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) { }

  @Post('/create')
  @ApiBody({type: CategoryDto})
  create(@Body() dto: CategoryDto) {
    return this.categoryService.create(dto)
  }

  @Get('/')
  getAll() {
    return this.categoryService.getAll()
  }

}