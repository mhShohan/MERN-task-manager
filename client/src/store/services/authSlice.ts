import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { verifyToken } from "../../utils/networkRequest";

interface InitialState {
  isAuthenticated: boolean;
  isLoading: boolean;
  error: null | string;
}

const initialState: InitialState = {
  isAuthenticated: false,
  isLoading: false,
  error: null
};

export const getAuth = createAsyncThunk('auth', async () => {
  try {
    const result = await verifyToken('/users/authVerify')

    if (result.data.statusCode === 200 && result.data.success) {
      return true
    } else {
      return false
    }
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