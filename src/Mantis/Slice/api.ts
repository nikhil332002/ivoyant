
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface User {
  id?: number;
  firstname: string;
  lastname: string;
  company?: string;
  email: string;
  password: string;
}


export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({

    loginUser: builder.query<User[], { email: string; password: string }>({
      query: ({ email, password }) => ({
        url: `users`,
        params: { email, password },
      }),
    }),

    signupUser: builder.mutation<User, Partial<User>>({
      query: (newUser) => ({
        url: 'users',
        method: 'POST',
        body: newUser,
      }),
    }),
  }),
});


export const { useLazyLoginUserQuery, useSignupUserMutation } = userApi;
