import { useForm } from 'react-hook-form'
import { userApi } from '../../api/userApi'
import { InputFieldsType } from './types'
import {toast} from 'react-toastify'

export const UseAuth =  () => {

  const {register: registerInput, handleSubmit, formState: {errors}} = useForm<InputFieldsType>({
    mode: 'onChange'
  })

  const onSubmit = async (userData: InputFieldsType) => {
    try{
      const res = await userApi.login(userData)
      console.log(res)
    } catch(e) {
      console.log(e)
      toast.error("Не верные учетные данные")
    }
  }

  return {registerInput, handleSubmit, errors, onSubmit}
}
