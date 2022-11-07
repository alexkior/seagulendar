import * as React from 'react'
import styles from './CalendarController.module.scss'

const CalendarController: React.FC = function CalendarController() {
  return (
    <div className={styles.CalendarController}>
      <div className={styles.CalendarController__previous}>
        October 2022
      </div>
      <div className={styles.CalendarController__current}>
        November 2022
      </div>
      <div className={styles.CalendarController__next}>
        December 2022
      </div>
    </div>
  )
}

export default CalendarController
