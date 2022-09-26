import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { ProductsDto } from "./dto/products.dto";
import { Products, ProductsDocument } from "./schema/products.schema";


@Injectable()
export class ProductsService {
    constructor(@InjectModel(Products.name) private productsModel: Model<ProductsDocument>) { }

    async create(dto: ProductsDto): Promise<Products> {
        const product = await this.productsModel.create({ ...dto })
        return product
    }

    async getAll(): Promise<Products[]> {
        const products = await this.productsModel.find()
        return products
    }

    async getOne(id: ObjectId): Promise<Products> {
        const product = await this.productsModel.findById(id)
        return product
    }
}