import * as React from 'react'
import styles from './CalendarItem.module.scss'
import seagul from '../../../../assets/seagull.svg'
import useSelectedItem from '../../../../hooks/useSelectedItem'

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
  onClick: () => void;
}

const CalendarItem: React.FC<CalendarItem> = function CalendarItem({
  date,
  month,
  day,
  content,
}: CalendarItem) {

  const [state, setState] = React.useState(0)
  const hookDate = useSelectedItem(state)
  const selectedItem = createDate
  
  console.log(content)

  console.log(hookDate, 'Instide item')
  // React.useEffect(() => {
  //   if (hookDate !== state) {
      
  //     setState(0)
  //   }
  // }, [hookDate])
  
  return (
    <>
      {createDate === date && createMonth === month ? (
        <div
          onClick={() => setState(date)}
          className={hookDate === createDate ? styles.CalendarItem_selected : styles.CalendarItem_currentDay}
        >
          <img className={styles.CalendarItem__seagull} src={seagul} alt="seagull" /> 
        </div>
      ) : (
        <div
          onClick={() => setState(date)}
          className={
            createMonth === month
              ? (hookDate === date ? styles.CalendarItem_selected : (content === '' ? styles.CalendarItem : styles.CalendarItem_withContent))
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
