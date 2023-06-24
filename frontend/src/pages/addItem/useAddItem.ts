import { useSelector } from "react-redux"
import { selectCategories } from "../../redux/category/selectors"
import { ChangeEvent } from "react"
import { useMutation } from "react-query"
import axiosOrigyn from "../../api/axios/axios"
import { useForm } from "react-hook-form"

type InputFields = {
  e: ChangeEvent<HTMLInputElement>
  name: string
  category: string
  price: string
  sale?: string
}

export const useAddItem = () => {
  const categories = useSelector(selectCategories)

  const {register, handleSubmit, formState: {errors}} = useForm<InputFields>({
    mode: 'onChange'
  })

  const onSubmit = (data: InputFields) => {
    // console.log('file', data.e.target.file)
  }

  const {mutateAsync, isLoading} = useMutation(
    'uploadFile',
    (data: FormData) => axiosOrigyn.post('http://localhost:5000/files/upload', data),
    {
      onSuccess(data) {
        console.log('data',data)
      }
    }
  )
  
  const uploadImage = async (file: File) => {
    
    if(file) {
      const formData = new FormData()
      formData.append('image', file)
      return await mutateAsync(formData)
    }
  }


  // const uploadImage = async (e: ChangeEvent<HTMLInputElement>) => {
  //   const files = e.target.files
  //   if(files?.length) {
  //     const formData = new FormData()
  //     formData.append('image', files[0])
  //     await mutateAsync(formData)
  //   }
  // }

  return {categories, uploadImage, isLoading, register, handleSubmit, onSubmit, errors}
}
