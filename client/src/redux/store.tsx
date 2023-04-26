import { configureStore } from '@reduxjs/toolkit'
import {
  useSelector as rawUseSelector,
  TypedUseSelectorHook,
} from 'react-redux'
import selectedDayReducer from './slices/selectedDaySlice'
import selectedMonthReducer from './slices/selectedMonthSlice'
import selectedYearReducer from './slices/selectedYearSlice'


export const store = configureStore({
  reducer: {
    selectedDay: selectedDayReducer,
    selectedMonth: selectedMonthReducer,
    selectedYear: selectedYearReducer
  },
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector
