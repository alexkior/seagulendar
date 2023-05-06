/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'
import { motion } from 'framer-motion'
import { useSelector } from '../../redux/store'

import styles from './Sidebar.module.css'
import { SidebarBlockList } from './components/SidebarBlockList'

const Sidebar: React.FC = function Sidebar() {
  const selectedDay = useSelector((state: any) => state.selectedDay.selectedDay)

  return (
    <motion.section
      initial={{ x: '-500px', opacity: 0 }}
      animate={{ x: '0px', opacity: 1 }}
      transition={{ duration: 1 }}
      className={styles.Sidebar}
    >
      <h2 className={styles.Sidebar__title}>
        {selectedDay.date} {selectedDay.month}
      </h2>

      <h2 className={styles.Sidebar__subtitle}>
        {selectedDay.year}
      </h2>

      <SidebarBlockList />

    </motion.section>
  )
}

export default Sidebar
