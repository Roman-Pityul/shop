import axiosClassik from "./axios/axios"
import axios, { AxiosError, AxiosResponse  } from 'axios'

import { SERVER } from '../helpers/constants'
import { UserLoginDataType, UserReturnLoginType } from "./types"

export const userApi = {
  async login(userData: UserLoginDataType) {
    try{
      const resp = await axiosClassik.post<AxiosResponse<UserReturnLoginType>>(`${SERVER}/users/login`, userData)
      return resp
    } catch(e){
      const errors = e as Error | AxiosError
      if(axios.isAxiosError(errors)){return(errors.response)}
    }
  }
}