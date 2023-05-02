import axiosClassik from "./axios/axios"

import { SERVER } from '../helpers/constants'
import { UserLoginDataType, UserReturnLoginType } from "./types"

export const userApi = {
  async login(userData: UserLoginDataType) {
    const resp = await axiosClassik.post<UserReturnLoginType>(`${SERVER}/users/login`, userData)
    return resp.data
  }
}