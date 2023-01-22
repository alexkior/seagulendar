import * as React from 'react'
import { motion } from 'framer-motion'
import styles from './CalendarController.module.scss'

const CalendarController: React.FC = function CalendarController() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={styles.CalendarController}
    >
      <div className={styles.CalendarController__previous}>
        December 2022
      </div>
      <div className={styles.CalendarController__current}>
        January 2023
      </div>
      <div className={styles.CalendarController__next}>
        February 2023
      </div>
    </motion.div>
  )
}

export default CalendarController
