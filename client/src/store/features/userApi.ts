import { baseApi } from "./baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSelfProfile: builder.query({
      query: () => ({
        url: '/users/self',
        method: 'GET',
      })
    }),
  }),
})

export const { useGetSelfProfileQuery } = userApi