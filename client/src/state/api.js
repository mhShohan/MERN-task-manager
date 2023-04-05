import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
    reducerPath: 'adminPath',
    tagTypes: ['User', 'Products'],
    endpoints: (build) => ({
        getUser: build.query({
            query: (id) => `general/user/${id}`,
            providesTags: ["User"],
        }),
        getProducts: build.query({
            query: () => 'client/products',
            providesTags: ['Products']
        })
    })
});


export const { useGetUserQuery, useGetProductsQuery } = api;