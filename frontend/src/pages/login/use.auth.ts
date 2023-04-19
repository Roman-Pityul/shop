import { useForm } from 'react-hook-form'
import {UserLoginDataType} from '../../api/types'
import { userApi } from '../../api/userApi'
import { InputFieldsType } from './types'

export const useAuth =  () => {
  const login = (userData: UserLoginDataType) => {
    const res = userApi.login(userData)
    console.log(res)
  }

  const {register: registerInput, handleSubmit, formState: {errors}} = useForm<InputFieldsType>({
    mode: 'onChange'
  })

  const onSubmit = (data: InputFieldsType) => {
    login(data)
  }


  return {registerInput, handleSubmit, errors, onSubmit}
}
