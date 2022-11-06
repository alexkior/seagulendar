import * as React from 'react'
import styles from './CalendarHeader.module.scss'

const CalendarHeader: React.FC = function CalendarHeader() {
  return (
    <div className={styles.CalendarHeader}>
      <div className={styles.CalendarHeader__test_element}>
        Mon
      </div>

      <div className={styles.CalendarHeader__test_element}>
        Tue
      </div>

      <div className={styles.CalendarHeader__test_element}>
        Wed
      </div>

      <div className={styles.CalendarHeader__test_element}>
        Thu
      </div>

      <div className={styles.CalendarHeader__test_element}>
        Fri
      </div>

      <div className={styles.CalendarHeader__test_element}>
        Sat
      </div>

      <div className={styles.CalendarHeader__test_element}>
        Sun
      </div>
    </div>
  )
}

export default CalendarHeader
