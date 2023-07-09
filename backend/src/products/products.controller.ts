import { Body, Controller, Get, Param, Post, Query, Res, UploadedFile, UseInterceptors } from "@nestjs/common";
import { ObjectId } from "mongoose";
import { ProductsDto } from "./dto/products.dto";
import { ProductsService } from "./products.service";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { FileInterceptor } from "@nestjs/platform-express";


@Controller('/products')
@ApiTags('products')
export class ProductsController {
  constructor(private productsService: ProductsService) { }

  @Post('/create')
  @UseInterceptors(FileInterceptor('image'))
  @ApiBody({type: ProductsDto})
  create(@Body() dto: ProductsDto) {
    return this.productsService.create(dto)
  }

  @Get('/')
  getAll() {
    return this.productsService.getAll()
  }

  @Get('/findby/:category')
  getAllByCategory(@Param('category') category: string) {
    return this.productsService.getAllByCategory(category)
  }

  @Get('/search')
  search(@Query('query') query: string) {
    return this.productsService.search(query)
  }

  @Get('/:id')
  getOne(@Param('id') id: ObjectId) {
    return this.productsService.getOne(id)
  }
}