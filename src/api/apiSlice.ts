import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {RootState} from '../app/store';

const BASE_URL = 'http://localhost:5001/';

interface LoginType {
  email: string;
  password: string;
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, api) => {
      const {getState} = api;
      const token = (getState() as RootState).Auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  //   extractRehydrationInfo: (action, {reducerPath}) => {
  //     if (action.type === REHYDRATE) {
  //         return action.payload[reducerPath]
  //       }
  //   },
  endpoints: builder => ({
    login: builder.mutation<any, LoginType>({
      query: credential => ({
        url: 'api/user/login',
        method: 'POST',
        body: credential,
      }),
    }),
    showUserDetails: builder.query<any, unknown>({
      query: () => 'api/user/show-user-details',
    }),
  }),
});

export const {useLoginMutation, useShowUserDetailsQuery} = apiSlice;
