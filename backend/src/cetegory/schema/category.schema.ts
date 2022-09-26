import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema()
export class Category {

    @Prop()
    name: string

    @Prop()
    value: string
}

export const CategorySchema = SchemaFactory.createForClass(Category)

export type CategoryDocument = Category & Document
