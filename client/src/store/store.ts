import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import { baseApi } from './features/baseApi';
import authReducer from './services/authSlice';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

//* step 1 - to save authReducer into localStorage
const persistConfig = {
  key: 'auth',
  storage
}

//*  step 2 - to save authReducer into localStorage
const persistedAuthReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    [baseApi.reducerPath]: baseApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    //*  step 3 - to save authReducer into localStorage
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

//*  step 4 - to save authReducer into localStorage
export const persistor = persistStore(store)