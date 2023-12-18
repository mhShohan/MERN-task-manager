import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface User {
  name: string;
  email: string;
}

interface InitialState {
  users: null | User[];
  isLoading: boolean;
  error: null | string;
}

const initialState: InitialState = {
  users: null,
  isLoading: true,
  error: null
};

// Async thunk to fetch users from the API
export const fetchUsers = createAsyncThunk('users/fetchUsers', async (id) => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users?id=${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch users');
  }
});

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Error To Fetch user';
      });
  }
});

export default userSlice.reducer;
