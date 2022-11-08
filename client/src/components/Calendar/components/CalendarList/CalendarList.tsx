import * as React from 'react'
import { motion } from 'framer-motion'
import styles from './CalendarList.module.scss'

import { CalendarItem } from '../CalendarItem'

const CalendarList: React.FC = function CalendarList() {
  return (
    <motion.div
      initial={{ x: '100px', opacity: 0 }}
      animate={{ x: '0px', opacity: 1 }}
      transition={{ duration: 1 }}
      className={styles.CalendarList}
    >
      <CalendarItem />
    </motion.div>
  )
}

export default CalendarList
