import * as React from 'react'
import styles from './Calendar.module.scss'

import { CalendarController } from './components/CalendarController'
import { CalendarHeader } from './components/CalendarHeader'
import { CalendarList } from './components/CalendarList'

const Calendar: React.FC = function Calendar() {
  return (
    <section className={styles.Calendar}>
      <CalendarController />
      <CalendarHeader />
      <CalendarList />
    </section>
  )
}

export default Calendar
