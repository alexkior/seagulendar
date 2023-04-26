import { createSlice } from '@reduxjs/toolkit'

const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
const currentDate = new Date(Date.now())
const createMonth = month[currentDate.getMonth()]
const createYear = currentDate.getFullYear()

const createDate = currentDate.getDate()
const createDay = currentDate.getDay()

export const selectedDaySlice = createSlice({
  name: 'selectedDay',
  initialState: {
    selectedDay: {
      date: createDate,
      month: createMonth,
      year: createYear,
      day: createDay,
      content: ''
    },
  },
  reducers: {
    selectDay: (state, action) => {
      state.selectedDay = action.payload
      console.log('selectedDaySlice.tsx: ', state.selectedDay)
      
    },
  },
})

export const { selectDay } = selectedDaySlice.actions

export default selectedDaySlice.reducer
