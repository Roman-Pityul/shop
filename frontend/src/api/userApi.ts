import axios from "./axios/axios"

import { SERVER } from '../helpers/constants'
import { UserLoginDataType, UserReturnLoginType } from "./types"

export const userApi = {
  async login(userData: UserLoginDataType) {
    try{
     const resp = await axios.post<UserReturnLoginType>(`${SERVER}/users/login`, userData)
     return resp
    } catch (e) {
     console.log(e)
    }
  }
}