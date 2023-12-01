import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const baseUrl = 'http://localhost:5000/';

export interface ITask {
  id: number;
  title: string;
  body: string;
}

const fetchTask = async () => {
  return await axios.get(baseUrl);
};

const createTaskData = async (payload: { title: string; body: string }) => {
  return await axios.post(baseUrl, payload);
};

const deleteTaskData = async (id: number) => {
  return await axios.delete(baseUrl + id);
};

export const taskApi = createApi({
  reducerPath: 'taskApi',
  baseQuery: fetchTask,
  tagTypes: ['Task', 'User'],
  endpoints: (builder) => ({
    getTask: builder.query<ITask[], void>({
      query: () => '/',
      //   transformResponse: (res: ITask[]) => res.slice(0, 10), // transform the Response as your need
      providesTags: ['Task'], // which tagsType use for
    }),
    createTask: builder.mutation({
      query: createTaskData,
      invalidatesTags: ['Task'],
    }),
    deleteTask: builder.mutation({
      query: deleteTaskData,
      invalidatesTags: ['Task'],
    }),
  }),
});

export const { useGetTaskQuery, useCreateTaskMutation, useDeleteTaskMutation } = taskApi;