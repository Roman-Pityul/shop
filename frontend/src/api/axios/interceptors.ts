import axios from "axios";

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  }
})

instance.interceptors.request.use((config) => {

  return config
})

instance.interceptors.response.use(
  (config) => {
    return config
  }, 
  async (error) => {
  }
  
)

export default instance