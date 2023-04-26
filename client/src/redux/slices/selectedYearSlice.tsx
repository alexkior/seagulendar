import { createSlice } from '@reduxjs/toolkit'

const currentDate = new Date(Date.now())
const createYear = currentDate.getFullYear()

export const selectedYearSlice = createSlice({
  name: 'selectedYear',
  initialState: {
    selectedYear: createYear,
  },
  reducers: {
    selectYear: (state, action) => {
      state.selectedYear = action.payload
      console.log('selectedYearSlice.tsx: ', state.selectedYear)
      
    },
  },
})

export const { selectYear } = selectedYearSlice.actions

export default selectedYearSlice.reducer
