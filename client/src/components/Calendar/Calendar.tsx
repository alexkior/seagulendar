import * as React from 'react'
import styles from './Calendar.module.scss'

import { CalendarController } from './components/CalendarController'
import { CalendarHeader } from './components/CalendarHeader'
import { CalendarList } from './components/CalendarList'
import { useSelector } from '../../redux/store'

const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const mockServerContent = [
  {
    id: 1,
    user_id: 1,
    user_name: 'user1',
    date: 11,
    month: 'January',
    year: 2023,
    content: [
      'Some content to test it'
    ]
  },
  {
    id: 2,
    user_id: 2,
    user_name: 'user1',
    date: 14,
    month: 'January',
    year: 2023,
    content: [
      'Some other content to test it',
      'And some other content to test it'
    ]
  }
]


function getContent(date: number, month: string, year: number) {
  const result = mockServerContent[mockServerContent.findIndex((el) => el.date === date && el.month === month && el.year === year)]?.content
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
        year: date.getFullYear(),
        day: date.toLocaleString('en', { weekday: 'short' }),
        content: getContent(date.getDate(), date.toLocaleString('en', { month: 'long' }), date.getFullYear())
      }
    })
  }).flat(35)
}
const Calendar: React.FC = function Calendar() {
  const selectedMonth = useSelector((state: any) => state.selectedMonth.selectedMonth)
  const selectedYear = useSelector((state: any) => state.selectedYear.selectedYear)

  const [days, setDays] = React.useState([{}])
  
  React.useEffect(() => {
    setDays(getFullWeeksStartAndEndInMonth(month.indexOf(selectedMonth), selectedYear))
  }, [])

  React.useEffect(() => {
    setDays(getFullWeeksStartAndEndInMonth(month.indexOf(selectedMonth), selectedYear))
    
  }, [selectedMonth, selectedYear])

  return (
    <section className={styles.Calendar}>
      <CalendarController />
      <CalendarHeader />
      <CalendarList days={days} />
    </section>
  )
}

export default Calendar
