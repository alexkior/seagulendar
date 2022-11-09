import * as React from 'react'

import { useSelector } from '../../../../redux/store'
import { useDispatch } from 'react-redux'
import { select } from '../../../../redux/slices/selectedSlice'

import styles from './CalendarItem.module.scss'
import seagul from '../../../../assets/seagull.svg'

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
const createDate = currentDate.getDate()

interface CalendarItem {
  date: number;
  month: string;
  year: number;
  day: string;
  content: string | string[];
}

const CalendarItem: React.FC<CalendarItem> = function CalendarItem({
  date,
  month,
  year,
  day,
  content,
}: CalendarItem) {
  const selected = useSelector((state: any) => state.selected.selectedItem)
  const dispatch = useDispatch()
  
  console.log(content)
  
  return (
    <>
      {createDate === date && createMonth === month ? (
        <div
          onClick={
            () => dispatch(
              select({
                date: date,
                month: month, 
                year: year,
                day: day,
                content: content
              })
            )
          }
          className={selected?.date === createDate ? styles.CalendarItem_selected : styles.CalendarItem_currentDay}
        >
          <img className={styles.CalendarItem__seagull} src={seagul} alt="seagull" /> 
        </div>
      ) : (
        <div
          onClick={
            () => dispatch(
              select({
                date: date,
                month: month, 
                year: year,
                day: day,
                content: content
              })
            )
          }
          className={
            createMonth === month
              ? (selected?.date === date ? styles.CalendarItem_selected : (content === '' ? styles.CalendarItem : styles.CalendarItem_withContent))
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
