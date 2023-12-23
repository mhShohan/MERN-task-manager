import axios from 'axios';
import { createApi } from '@reduxjs/toolkit/query/react';
import { toast } from 'react-toastify';

// project import
import config from '../../utils/config';
import { IUser, IUserLogin } from '../../interfaces/user.interface';

const fetch = async () => {
  return await axios.get(config.healthUrl);
};

const login = async (payload: IUserLogin) => {
  try {
    const result = await axios.post(config.baseUrl + '/users/login', payload);

    if (result?.data?.data?.token) {
      localStorage.setItem('accessToken', result?.data?.data?.token);
    }

    if (result.data.statusCode === 200 && result.data.success) {
      toast.success(result.data.message);
    }

    return result;
  } catch (error: any) {
    if (!error.response.data.success && error.response.data.statusCode === 400) {
      toast.error('Wrong Credentials!');
    }
  }
};

const register = async (payload: IUser) => {
  try {
    const result = await axios.post(config.baseUrl + '/users/register', payload);
    console.log(result);

    if (result?.data?.data?.token) {
      localStorage.setItem('accessToken', result?.data?.data?.token);
    }

    if (result.data.statusCode === 201 && result.data.success) {
      toast.success(result.data.message);
    }

    return result;
  } catch (error: any) {
    if (!error.response.data.success) {
      toast.error(error.response.data.message);
    }
  }
};

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetch,
  tagTypes: ['auth'],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: login,
      invalidatesTags: ['auth'],
    }),
    register: builder.mutation({
      query: register,
      invalidatesTags: ['auth'],
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
