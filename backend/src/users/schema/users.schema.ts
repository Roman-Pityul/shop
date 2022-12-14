import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import * as mongoose from 'mongoose'

export type UserDocument = User & Document

@Schema()
export class User {

  @Prop()
  email: string

  @Prop()
  password: string

  @Prop()
  name: string

}

export const UserSchema = SchemaFactory.createForClass(User);