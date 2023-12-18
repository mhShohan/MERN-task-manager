import axios from "axios";
import config from './config'


const axiosSecure = axios.create({
  baseURL: config.baseUrl
})

axiosSecure.interceptors.request.use((conf) => {
  const token = localStorage.getItem('accessToken')

  if (token) {
    conf.headers.Authorization = `Bearer ${token}`;
  }



  return conf
})

export const getRequest = async (url: string) => {
  try {
    const res = await axiosSecure.get(url)

    return { data: res.data, error: null }


  } catch (err: any) {
    return { data: null, error: err.response.data }
  }
}