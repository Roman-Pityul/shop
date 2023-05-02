import { useForm } from 'react-hook-form'
import { userApi } from '../../api/userApi'
import { InputFieldsType } from './types'
import {toast} from 'react-toastify'
import Cookies from 'js-cookie'

export const UseAuth =  () => {

  const {register: registerInput, handleSubmit, formState: {errors}} = useForm<InputFieldsType>({
    mode: 'onChange'
  })

  const onSubmit = async (userData: InputFieldsType) => {
    try{
      const res = await userApi.login(userData)
      Cookies.set('accessToken', res.accessToken)
      Cookies.set('refreshToken', res.refreshToken)
    } catch(e) {
      toast.error("Не верные учетные данные")
    }
  }

  return {registerInput, handleSubmit, errors, onSubmit}
}
