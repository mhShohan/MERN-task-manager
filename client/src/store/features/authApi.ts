import { createApi } from '@reduxjs/toolkit/query/react';
import { verifyToken } from '../../utils/axios';

interface IAuth {
  data: {
    isAuthenticated: boolean;
  };
}

const fetch = async () => {
  return await verifyToken('/users/authVerify');
};

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetch,
  tagTypes: ['auth'],
  endpoints: (builder) => ({
    getAuth: builder.query<IAuth, void>({
      query: () => '/'
    })
  })
});

export const { useGetAuthQuery } = authApi;
