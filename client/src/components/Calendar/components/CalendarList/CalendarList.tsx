import * as React from 'react'
import { motion } from 'framer-motion'
import { useSelector } from '../../../../redux/store'
import { useDispatch } from 'react-redux'
import { select } from '../../../../redux/slices/selectedSlice'

import styles from './CalendarList.module.scss'

import { CalendarItem } from '../CalendarItem'

const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const currentDate = new Date(Date.now())
const createMonth = month[currentDate.getMonth()]
const createYear = currentDate.getFullYear()
const currentMonth = currentDate.getMonth()

const createDate = currentDate.getDate()
const createDay = currentDate.getDay()
const fullDate = currentDate.toLocaleDateString('en-US', {
  weekday: 'short',
})

const mockServerContent = [
  {
    id: 1,
    user_id: 1,
    user_name: 'user1',
    date: 11,
    month: 'November',
    year: 2022,
    content: 'Some content to test it'
  },
  {
    id: 2,
    user_id: 2,
    user_name: 'user1',
    date: 14,
    month: 'November',
    year: 2022,
    content: 'Some other content to test it'
  }
]


function getContent(date: number, month: string, year: number) {
  const result = JSON.stringify(mockServerContent[mockServerContent.findIndex((el) => el.date === date && el.month === month && el.year === year)])
  return result !== undefined ? result : ''
}


function getFullWeeksStartAndEndInMonth (month: number, year: number) {
  const weeks = []
  const firstDate = new Date(year, month, 1)
  const lastDate = new Date(year, month + 1, 0)
  const numDays = lastDate.getDate()

  let start = 1
  let end
  if (firstDate.getDay() === 1) {
    end = 7
  } else if (firstDate.getDay() === 0) {
    const preMonthEndDay = new Date(year, month, 0)
    start = preMonthEndDay.getDate() - 6 + 1
    end = 1
  } else {
    const preMonthEndDay = new Date(year, month, 0)
    start = preMonthEndDay.getDate() + 1 - firstDate.getDay() + 1
    end = 7 - firstDate.getDay() + 1
    weeks.push({
      start: start,
      end: end
    })
    start = end + 1
    end = end + 7
  }
  while (start <= numDays) {
    weeks.push({
      start: start,
      end: end
    })
    start = end + 1
    end = end + 7
    end = start === 1 && end === 8 ? 1 : end
    if (end > numDays && start <= numDays) {
      end = end - numDays
      weeks.push({
        start: start,
        end: end
      })
      break
    }
  }

  return weeks.map(({start, end}, index) => {
    const sub = +(start > end && index === 0)
    return Array.from({length: 7}, (_, index) => {
      const date = new Date(year, month - sub, start + index)
      return {
        date: date.getDate(),
        month: date.toLocaleString('en', { month: 'long' }),
        day: date.toLocaleString('en', { weekday: 'short' }),
        content: getContent(date.getDate(), date.toLocaleString('en', { month: 'long' }), date.getFullYear())
      }
    })
  }).flat(35)
}
console.log(
  'test',
  getFullWeeksStartAndEndInMonth(currentMonth, createYear)
)


const days = getFullWeeksStartAndEndInMonth(currentMonth, createYear)

const CalendarList: React.FC = function CalendarList() {
  // const selected = useSelector((state: any) => state.selected.selectedItem)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(
      select({
        date: createDate,
        month: createMonth,       
        day: createDay,
        content: days[days.findIndex((el) => el.date === createDate && el.month === createMonth)].content
      }))
  }, [])

  return (
    <motion.div
      initial={{ x: '100px', opacity: 0 }}
      animate={{ x: '0px', opacity: 1 }}
      transition={{ duration: 1 }}
      className={styles.CalendarList}
    >
      {days.map((day, index) => 
        <CalendarItem
          key={index} 
          date={day.date} 
          month={day.month} 
          day={day.day} 
          content={day.content}
        />
      )}
    </motion.div>
  )
}

export default CalendarList
