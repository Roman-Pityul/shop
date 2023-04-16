import axios from "axios"

import { SERVER } from '../helpers/constants'

export const categoryApi = {
  async getCategories() {
    const categories = await axios.get(`${SERVER}/category`)
    return categories
  }
}