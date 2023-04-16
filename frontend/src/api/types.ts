export type UserLoginDataType = {
  email: string
  password: string
}

export type UserRegistrationDataType = {
  email: string
  password: string
  name: string
}

export type UserReturnLoginType = {
  refreshToken: string
  accessToken: string
  userId: string
}