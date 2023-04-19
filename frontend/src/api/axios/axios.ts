import axios, { Axios } from "axios";

const axiosOrigyn = axios.create({
  headers: {
    'Content-Type': 'application/json',
  }
}) as Axios

export default axiosOrigyn