import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import config from "../../utils/config";


export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: config.baseUrl }),
  endpoints: () => ({})
})