import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Category, CategoryDocument } from "./schema/category.schema";
import { CategoryDto } from "./dto/category.dto";


@Injectable()
export class CategoryService {
    constructor(@InjectModel(Category.name) private categoryModel: Model<CategoryDocument>) { }

    async create(dto: CategoryDto): Promise<Category> {
        const category = await this.categoryModel.create({ ...dto })
        return category
    }

    async getAll(): Promise<Category[]> {
        const category = await this.categoryModel.find()
        return category
    }
}