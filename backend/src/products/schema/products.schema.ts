import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
export type ProductsDocument = Products & Document

@Schema()
export class Products {
  @Prop()
  category: string

  @Prop()
  img: string

  @Prop()
  price: string

  @Prop()
  sale: string

  @Prop()
  description: string
}

export const ProductsSchema = SchemaFactory.createForClass(Products)