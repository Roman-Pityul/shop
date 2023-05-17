import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export enum userRoles {
  USER = "USER",
  ADMIN = "ADMIN"
}

export type UserDocument = User & Document

@Schema()
export class User {

  @Prop()
  email: string

  @Prop()
  password: string

  @Prop()
  name: string

  @Prop()
  role: userRoles

}

export const UserSchema = SchemaFactory.createForClass(User)