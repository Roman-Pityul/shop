import axios from "axios";

const axiosOrigyn = axios.create({
  headers: {
    'Content-Type': 'application/json',
  }
})

export default axiosOrigyn