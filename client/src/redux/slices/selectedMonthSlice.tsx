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

export const selectedMonthSlice = createSlice({
  name: 'selectedMonth',
  initialState: {
    selectedMonth: createMonth,
  },
  reducers: {
    selectMonth: (state, action) => {
      state.selectedMonth = action.payload
      console.log('selectedMonthSlice.tsx: ', state.selectedMonth)
      
    },
  },
})

export const { selectMonth } = selectedMonthSlice.actions

export default selectedMonthSlice.reducer
