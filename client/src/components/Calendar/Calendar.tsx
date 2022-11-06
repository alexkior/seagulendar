import * as React from 'react'
import styles from './Calendar.module.scss'

import { CalendarController } from './components/CalendarController'

const Calendar: React.FC = function Calendar() {
  return (
    <section className={styles.Calendar}>
      <CalendarController />
      <div className={styles.Calendar__test_element} />
      <div className={styles.Calendar__test_element} />
      <div className={styles.Calendar__test_element} />
      <div className={styles.Calendar__test_element} />
      <div className={styles.Calendar__test_element} />
      <div className={styles.Calendar__test_element} />
      <div className={styles.Calendar__test_element} />
      <div className={styles.Calendar__test_element} />
      <div className={styles.Calendar__test_element} />
      <div className={styles.Calendar__test_element} />
    </section>
  )
}

export default Calendar
