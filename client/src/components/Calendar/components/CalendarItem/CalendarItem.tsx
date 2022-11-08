import * as React from 'react'
import styles from './CalendarItem.module.scss'

const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const currentDate = new Date(Date.now())
const createMonth = month[currentDate.getMonth()]

interface CalendarItem {
  date: number,
  month: string,
  day: string
}

const CalendarItem: React.FC<CalendarItem> = function CalendarItem(
  { date, month, day }: CalendarItem
) {
  
  return (
    <div className={createMonth === month ? styles.CalendarItem : styles.CalendarItem_notCurrentMonth}>
      <p>
        {date}
      </p>
    </div>
  )
}

export default CalendarItem
