import { createSlice } from '@reduxjs/toolkit'

export const selectedSlice = createSlice({
  name: 'selected',
  initialState: {
    selectedItem: {
      date: 0,
      month: '',
      year: 0,
      day: '',
      content: ''
    },
  },
  reducers: {
    select: (state, action) => {
      state.selectedItem = action.payload
    },
  },
})

export const { select } = selectedSlice.actions

export default selectedSlice.reducer
