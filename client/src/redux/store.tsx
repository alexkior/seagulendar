import { configureStore } from '@reduxjs/toolkit'
import {
  useSelector as rawUseSelector,
  TypedUseSelectorHook,
} from 'react-redux'
import selectedDayReducer from './slices/selectedDaySlice'
import selectedMonthReducer from './slices/selectedMonthSlice'
import selectedYearReducer from './slices/selectedYearSlice'
import { userApi } from '../services/UserService'
import { noteApi } from '../services/NoteService'

export const store = configureStore({
  reducer: {
    selectedDay: selectedDayReducer,
    selectedMonth: selectedMonthReducer,
    selectedYear: selectedYearReducer,
    [userApi.reducerPath]: userApi.reducer,
    [noteApi.reducerPath]: noteApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware, noteApi.middleware),
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector
