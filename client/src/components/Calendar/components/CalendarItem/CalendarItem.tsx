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
const createDate = currentDate.getDate()

interface CalendarItem {
  date: number;
  month: string;
  day: string;
  content: string;
}

const CalendarItem: React.FC<CalendarItem> = function CalendarItem({
  date,
  month,
  day,
  content
}: CalendarItem) {

  const selectedItem = createDate

  console.log(content)
  
  return (
    <>
      {createDate === date && createMonth === month ? (
        <div
          className={selectedItem === createDate ? styles.CalendarItem_selected : styles.CalendarItem_currentDay}
        >
          {/* <p>{date}</p> */}
          <img className={styles.CalendarItem__seagull} src={seagul} alt="seagull" /> 
        </div>
      ) : (
        <div
          className={
            createMonth === month
              ? (selectedItem === date ? styles.CalendarItem_selected : (content === '' ? styles.CalendarItem : styles.CalendarItem_withContent))
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
