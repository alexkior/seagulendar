/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'

import { useSelector } from '../../../../redux/store'
import { useDispatch } from 'react-redux'
import { selectDay } from '../../../../redux/slices/selectedDaySlice'
import { selectMonth } from '../../../../redux/slices/selectedMonthSlice'
import { selectYear } from '../../../../redux/slices/selectedYearSlice'

import styles from './CalendarItem.module.scss'
import seagul from '../../../../assets/img/seagull.svg'

const monthes = [
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
const createMonth = monthes[currentDate.getMonth()]
const createDate = currentDate.getDate()

interface CalendarItem {
  date: number;
  month: string;
  year: number;
  day: string;
  content: string | string[];
}

const CalendarItem: React.FC<CalendarItem> = function CalendarItem(props) {
  const { date, month, year, day, content } = props
  
  const selectedDay = useSelector((state: any) => state.selectedDay.selectedDay)
  const selectedMonth = useSelector((state: any) => state.selectedMonth.selectedMonth)
  const selectedYear = useSelector((state: any) => state.selectedYear.selectedYear)

  const dispatch = useDispatch()

  const handleSelectDay = () => { 
    if (month !== selectedMonth) {
      dispatch(selectMonth(monthes[monthes.indexOf(month)]))
      console.log(monthes[monthes.indexOf(month)], 'month in CalendarItem.tsx')
      
    }
    if (year !== selectedYear) {
      dispatch(selectYear(year))
    }

    dispatch(
      selectDay({
        date: date,
        month: month, 
        year: year,
        day: day,
        content: content
      })
    )
  }
  
  return (
    <>
      {createDate === date && createMonth === month ? (
        <div
          onClick={handleSelectDay}
          className={selectedDay?.date === createDate ? styles.CalendarItem_selected : styles.CalendarItem_currentDay}
        >
          {/* <img className={styles.CalendarItem__seagull} src={seagul} alt="seagull" />  */}
        </div>
      ) : (
        <div
          onClick={handleSelectDay}
          className={
            selectedMonth === month
              ? (selectedDay?.date === date && selectedMonth === selectedDay?.month && selectedYear === selectedDay?.year ? styles.CalendarItem_selected : (content === '' ? styles.CalendarItem : styles.CalendarItem_withContent))
              : styles.CalendarItem_notCurrentMonth
          }
        >
          <p>{date}</p>
        </div>
      )}
    </>
  )
}

export default CalendarItem
