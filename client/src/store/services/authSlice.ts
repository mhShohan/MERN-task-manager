import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type { PayloadAction } from '@reduxjs/toolkit'
import config from "../../utils/config";
import { IUserLogin } from "../../interfaces/user.interface";

interface InitialState {
  isAuthenticated: boolean;
  isLoading: boolean;
  error: null | string;
}

const initialState: InitialState = {
  isAuthenticated: false,
  isLoading: true,
  error: null
};

const getAuth = createAsyncThunk('auth/verify', async (payload: IUserLogin) => {
  try {
    const result = await axios.post(config.baseUrl + '/users/login', payload)

    if (result.data.statusCode === 200 && result.data.success) {
      localStorage.setItem('accessToken', result?.data?.data?.token)
    }

    return true
  } catch (error) {
    return false
  }
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAuth.pending, (state) => {
      state.isLoading = true;
    }).addCase(getAuth.fulfilled, (state, action: PayloadAction<boolean>) => {
      state.isLoading = false;
      state.isAuthenticated = action.payload;
    }).addCase(getAuth.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || 'Unauthorized!';
    });
  }
})

export default authSlice.reducer