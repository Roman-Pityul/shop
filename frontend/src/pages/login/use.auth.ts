import { useForm } from 'react-hook-form'
import {UserLoginDataType} from '../../api/types'
import { userApi } from '../../api/userApi'
import { InputFieldsType } from './types'
import {useMutation, useQuery} from 'react-query'

export const useAuth =  () => {
  const login = (userData: UserLoginDataType) => {
    const res = userApi.login(userData)
    console.log(res)
  }

  const {register: registerInput, handleSubmit, formState: {errors}} = useForm<InputFieldsType>({
    mode: 'onChange'
  })

  const onSubmit = (userData: InputFieldsType) => {
    const {data} = useMutation(["login", userData], () => login(userData))
    console.log(data)
  }


  return {registerInput, handleSubmit, errors, onSubmit}
}
