import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import { taskApi } from './features/taskApi';
import userReducer from './services/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    [taskApi.reducerPath]: taskApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([taskApi.middleware])
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
