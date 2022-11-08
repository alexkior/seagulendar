import * as React from 'react'
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
const createDay = currentDate.getDay()

interface CalendarItem {
  date: number;
  month: string;
  day: string;
}

const CalendarItem: React.FC<CalendarItem> = function CalendarItem({
  date,
  month,
  day,
}: CalendarItem) {
  return (
    <>
      {createDay === date && createMonth === month ? (
        <div
          className={styles.CalendarItem_currentDay}
        >
          <p>{date}</p>
          <img className={styles.CalendarItem__seagull} src={seagul} alt="seagull" /> 
        </div>
      ) : (
        <div
          className={
            createMonth === month
              ? styles.CalendarItem
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
