import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from 'mongoose'

export type FilesDocument = Files & Document

@Schema()
export class Files {
  @Prop()
  fileName: string

  @Prop()
  fileLink: string
}

export const FilesSchema = SchemaFactory.createForClass(Files)