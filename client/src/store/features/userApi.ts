import { createApi } from '@reduxjs/toolkit/query/react';
import axiosSecure from '../../utils/networkRequest';
import { toast } from 'react-toastify';
import { IUser } from '../../interfaces/user.interface';
import config from '../../utils/config';

const fetch = async () => {
  try {
    const result = await axiosSecure.get(config.baseUrl + '/users/self');
    return result.data;
  } catch (error: any) {
    if (!error.response.data.success && error.response.data.statusCode >= 400) {
      toast.error('Wrong Credentials!');
    }
    return error;
  }
};

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetch,
  endpoints: (builder) => ({
    getSelfProfile: builder.query<IUser, void>({
      query: () => '',
    }),
  }),
});

export const { useGetSelfProfileQuery } = userApi;
