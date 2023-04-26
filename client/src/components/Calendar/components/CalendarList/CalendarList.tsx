import * as React from 'react'
import { motion } from 'framer-motion'
import { useSelector } from '../../../../redux/store'
import { useDispatch } from 'react-redux'
import { selectDay } from '../../../../redux/slices/selectedDaySlice'

import styles from './CalendarList.module.scss'

import { CalendarItem } from '../CalendarItem'

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
const createYear = currentDate.getFullYear()
const createDate = currentDate.getDate()
const createDay = currentDate.getDay()

interface CalendarListProps {
  days: any;
}

const CalendarList: React.FC<CalendarListProps> = function CalendarList(props) {
  const { days } = props
  const dispatch = useDispatch()

  React.useEffect(() => {
    if (days.length !== 0) {
      dispatch(
        selectDay({
          date: createDate,
          month: createMonth,
          year: createYear,
          day: createDay,
          content:
            days[
              days.findIndex(
                (el) => el.date === createDate && el.month === createMonth
              )
            ]?.content,
        })
      )
    }
  }, [])

  return (
    <motion.div
      initial={{ x: '100px', opacity: 0 }}
      animate={{ x: '0px', opacity: 1 }}
      transition={{ duration: 1 }}
      className={styles.CalendarList}
    >
      {days?.length !== 0 ? (
        <>
          {days?.map((day, index) => (
            <CalendarItem
              key={index}
              date={day.date}
              month={day.month}
              year={day.year}
              day={day.day}
              content={day.content}
            />
          ))}
        </>
      ) : (
        <>
          <h1>Loading</h1>
        </>
      )}
    </motion.div>
  )
}

export default CalendarList
