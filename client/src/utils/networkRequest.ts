import axios from 'axios';
import config from './config';

const axiosSecure = axios.create({
  baseURL: config.baseUrl
});

axiosSecure.interceptors.request.use((conf) => {
  const token = localStorage.getItem('accessToken');

  if (token) {
    conf.headers.Authorization = `Bearer ${token}`;
  }

  return conf;
});

export const verifyToken = async (url: string) => {
  try {
    const res = await axiosSecure.get(url);
    return res;
  } catch (err: any) {
    return err.response;
  }
};
