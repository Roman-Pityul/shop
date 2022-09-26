import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose";
import { CategoryModule } from "./cetegory/cetegory.module";
import { ProductsModule } from "./products/products.module";

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://ramon:QW1234@cluster0.btwus97.mongodb.net/?retryWrites=true&w=majority'),
    CategoryModule,
    ProductsModule
  ],
})
export class AppModule { }
