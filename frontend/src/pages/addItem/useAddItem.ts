import { useSelector } from "react-redux"
import { selectCategories } from "../../redux/category/selectors"
import { useMutation } from "react-query"
import axiosOrigyn from "../../api/axios/axios"
import { useForm } from "react-hook-form"
import axios from "axios"
import { ChangeEvent } from "react"
import React from "react"
import { Category } from "../../redux/category/types"

type InputFields = {
  description: string
  category: string
  price: string
  sale?: string
  file: any
}

type UploadFileResponse = {
  res: {
    fileName: string
    fileLink: string
  }
  message: string
}

type CreateProduct = {
  description: string
  category: string
  price: string
  sale?: string
  img: string
}

export const useAddItem = () => {
  const categories = useSelector(selectCategories)

  const {register, handleSubmit, formState: {errors}} = useForm<InputFields>({
    mode: 'onChange'
  })

  const onSubmit = async (data: InputFields) => {
    const formData = new FormData()
    formData.append('image', data.file[0])
    const fileName = await uploadFile(formData)
    mutateAsync({
      description: data.description,
      category: selectCategory(data.category),
      price: data.price,
      sale: data.sale,
      img: fileName
    })
  }

  const uploadFile = async (file: FormData) => {
    const resp = await axios.post<UploadFileResponse>('http://localhost:5000/files/upload', file)
    return resp.data.res.fileLink
  }

  const selectCategory = (catName: string) => {
    const cat = categories.filter(c => c.name == catName)
    return String(cat[0].path)
  }

  const {mutateAsync, isLoading} = useMutation(
    'create product',
    (data: CreateProduct) => axiosOrigyn.post('http://localhost:5000/products/create', data),
    {
      onSuccess(data) {
        console.log('data',data)
      }
    }
  )

  return {categories, isLoading, register, handleSubmit, onSubmit, errors}
}
