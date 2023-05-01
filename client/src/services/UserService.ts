/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUser } from '../models/IUser'


export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    users: builder.query<IUser[], void>({
      query: () => '/users/all',
      providesTags: ['Users'],
    }),
    userById: builder.query<IUser, number>({
      query: (id) => `/users/${id}`,
      providesTags: ['Users'],
    }),
    userByTg: builder.query<IUser, string>({
      query: (tg) => `/users/tg/${tg}`,
      providesTags: ['Users'],
    }),
    updateUser: builder.mutation<IUser, IUser>({
      query(user) {
        return {
          url: `/users/${user.id}`,
          method: 'PUT',
          body: user,
        }
      },
      invalidatesTags: ['Users'],
    }),
    deleteUser: builder.mutation<IUser, IUser>({
      query(user) {
        return {
          url: `/users/${user.id}`,
          method: 'DELETE',
          body: user,
        }
      },
      invalidatesTags: ['Users'],
    }),
    createUser: builder.mutation<string, string>({
      query(text) {
        return {
          url: '/users',
          method: 'POST',
          body: {
            text,
          },
        }
      },
      invalidatesTags: ['Users'],
    }),
  }),
})

export const {
  useUsersQuery,
  useUserByIdQuery,
  useUserByTgQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi
