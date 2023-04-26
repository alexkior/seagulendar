import * as React from 'react'
import { motion } from 'framer-motion'
import styles from './CalendarController.module.scss'
import { useSelector } from '../../../../redux/store'
import { useDispatch } from 'react-redux'
import { selectMonth } from '../../../../redux/slices/selectedMonthSlice'
import { selectYear } from '../../../../redux/slices/selectedYearSlice'

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


const CalendarController: React.FC = function CalendarController() {
  const selectedMonth = useSelector((state: any) => state.selectedMonth.selectedMonth)
  const selectedYear = useSelector((state: any) => state.selectedYear.selectedYear)
  const dispatch = useDispatch()

  const handleNextMonth = () => {
    if (month.indexOf(selectedMonth) === 11) {
      dispatch(selectMonth(month[0]))
      dispatch(selectYear(selectedYear + 1))
    } else {
      dispatch(selectMonth(month[month.indexOf(selectedMonth) + 1]))
    }
  }
  const handlePreviousMonth = () => {
    if (month.indexOf(selectedMonth) === 0) {
      dispatch(selectMonth(month[11]))
      dispatch(selectYear(selectedYear - 1))
    } else {
      console.log(month[month.indexOf(selectedMonth) - 1], selectedMonth)
      
      dispatch(selectMonth(month[month.indexOf(selectedMonth) - 1]))
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={styles.CalendarController}
    >
      <div className={styles.CalendarController__previous} onClick={handlePreviousMonth}>
        {month[month.indexOf(selectedMonth)-1 === -1 ? 11 : (month.indexOf(selectedMonth)- 1)]} {selectedYear}
      </div>
      <div className={styles.CalendarController__current}>
        {selectedMonth} {selectedYear}
      </div>
      <div className={styles.CalendarController__next} onClick={handleNextMonth}>
        {month[month.indexOf(selectedMonth)+ 1 === 12 ? 0 : month.indexOf(selectedMonth)+ 1]} {selectedYear}
      </div>
    </motion.div>
  )
}

export default CalendarController
