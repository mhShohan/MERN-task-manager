import axios from 'axios';
import { createApi } from '@reduxjs/toolkit/query/react';
import { toast } from 'react-toastify';

// project import
import config from '../../utils/config';
import { IUserLogin } from '../../interfaces/user.interface';


const fetch = async () => {
  return await axios.get(config.baseUrl);
};

const login = async (payload: IUserLogin) => {
  try {
    const result = await axios.post(config.baseUrl + '/users/login', payload)

    if (result?.data?.data?.token) {
      localStorage.setItem('accessToken', result?.data?.data?.token)
    }

    if (result.data.statusCode === 200 && result.data.success) {
      toast.success(result.data.message)
      window.location.reload();
    }

    return result
  } catch (error: any) {
    if (!error.response.data.success && error.response.data.statusCode === 400) {
      toast.error('Wrong Credentials!')
    }
  }

}

// const register = async (payload: IUser) => {
//   return await axios.post(config.baseUrl + '/users/register', payload)
// }

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetch,
  tagTypes: ['auth'],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: login,
      invalidatesTags: ['auth']
    })
  })
});

export const { useLoginMutation } = authApi;
