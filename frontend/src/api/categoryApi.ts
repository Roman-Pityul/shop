import axios from "axios"

export const categoryApi = {
  async getCategories() {
    const categories = await axios.get('http://localhost:5000/category')
    return categories
  }
}