import { Module } from "@nestjs/common";
import {ProductsController} from "./products.controller";
import {ProductsService} from "./products.service";
import {MongooseModule} from "@nestjs/mongoose";
import {Products, ProductsSchema} from "./schema/products.schema";
import { FilesModule } from "src/files/files.module";

@Module({
  imports: [MongooseModule.forFeature([{name: Products.name, schema: ProductsSchema}]),
    FilesModule
  ],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {

}