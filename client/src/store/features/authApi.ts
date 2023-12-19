import axios from 'axios';
import { createApi } from '@reduxjs/toolkit/query/react';

// project import
import config from '../../utils/config';
import { verifyToken } from '../../utils/axios';
import { IUserLogin } from '../../interfaces/user.interface';
import { toast } from 'react-toastify';

interface IAuth {
  data: {
    isAuthenticated: boolean;
  };
}

const fetch = async () => {
  return await verifyToken('/users/authVerify');
};

const login = async (payload: IUserLogin) => {
  try {
    const result = await axios.post(config.baseUrl + '/users/login', payload)

    if (result?.data?.data?.token) {
      localStorage.setItem('accessToken', result?.data?.data?.token)
    }

    if (result.data.statusCode === 200 && result.data.success) {
      window.location.reload();
      toast.success(result.data.message)
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
    getAuth: builder.query<IAuth, void>({
      query: () => '/',
    }),
    login: builder.mutation({
      query: login,
      invalidatesTags: ['auth']
    })
  })
});

export const { useGetAuthQuery, useLoginMutation } = authApi;
