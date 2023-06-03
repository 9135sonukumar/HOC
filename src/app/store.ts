import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {apiSlice} from '../api/apiSlice';
import counterReducer from '../features/counter/counterSlice';
import authReducer from '../features/Auth/authSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    counter: counterReducer,
    Auth: authReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(logger, apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
