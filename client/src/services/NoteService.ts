import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { INote } from '../models/INote'


export const noteApi = createApi({
  reducerPath: 'noteApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  tagTypes: ['Notes'],
  endpoints: (builder) => ({
    notes: builder.query<INote[], void>({
      query: () => '/notes/all',
      providesTags: ['Notes'],
    }),
    noteById: builder.query<INote, number>({
      query: (id) => `/notes/${id}`,
      providesTags: ['Notes'],
    }),
    noteByTg: builder.query<INote, string>({
      query: (tg) => `/notes/tg/${tg}`,
      providesTags: ['Notes'],
    }),
    updateNote: builder.mutation<INote, INote>({
      query(note) {
        return {
          url: `/note/${note.id}`,
          method: 'PUT',
          body: note,
        }
      },
      invalidatesTags: ['Notes'],
    }),
    deleteNote: builder.mutation<INote, INote>({
      query(note) {
        return {
          url: `/notes/${note.id}`,
          method: 'DELETE',
          body: note,
        }
      },
      invalidatesTags: ['Notes'],
    }),
    createNote: builder.mutation<string, string>({
      query(text) {
        return {
          url: '/notes',
          method: 'POST',
          body: {
            text,
          },
        }
      },
      invalidatesTags: ['Notes'],
    }),
  }),
})

export const {
  useNotesQuery,
  useNoteByIdQuery,
  useNoteByTgQuery,
  useCreateNoteMutation,
  useUpdateNoteMutation,
  useDeleteNoteMutation,
} = noteApi
