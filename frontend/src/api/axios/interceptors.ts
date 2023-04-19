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
    console.log(config)
    return config
  }, 
  async (error) => {
    console.log(error)
  }
)

export default instance