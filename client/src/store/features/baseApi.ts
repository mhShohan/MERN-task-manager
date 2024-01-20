import { BaseQueryApi, BaseQueryFn, DefinitionType, FetchArgs, createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import config from "../../utils/config";
import { RootState } from "../store";
import { logoutUser } from "../services/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: config.baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token

    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }

    return headers
  }
})

const customBaseQuery: BaseQueryFn<FetchArgs, BaseQueryApi, DefinitionType> = async (args, api, extraOptions): Promise<any> => {
  const result = await baseQuery(args, api, extraOptions)

  if (result?.error?.status === 401) {
    //! TODO: refactor this system letter
    window.location.href = '/'
    api.dispatch(logoutUser())
  }

  return result
}


export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: customBaseQuery,
  endpoints: () => ({})
})