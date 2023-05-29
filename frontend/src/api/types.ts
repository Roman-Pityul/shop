import { User } from "../redux/users/types"

export type UserLoginDataType = {
  email: string
  password: string
}

export type UserRegistrationDataType = {
  email: string
  password: string
  name: string
}

export type TokensType = {
  refreshToken: string
  accessToken: string
}

export type UserReturnLoginType = User & TokensType