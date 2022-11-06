import * as React from 'react'
import styles from './CalendarList.module.scss'

const CalendarList: React.FC = function CalendarList() {
  return (
    <div className={styles.CalendarList}>
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
    </div>
  )
}

export default CalendarList
