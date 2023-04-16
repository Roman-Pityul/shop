import {UserLoginDataType} from '../../api/types'
import { userApi } from '../../api/userApi'

export const useAuth =  () => {
  const login = async (userData: UserLoginDataType) => {
    const res = await userApi.login(userData)
    console.log(res)
  }

  return {login}
}
