import * as React from 'react'
import { motion } from 'framer-motion'
import styles from './Sidebar.module.scss'
import { SidebarBlockList } from './components/SidebarBlockList'

const Sidebar: React.FC = function Sidebar() {
  return (
    <motion.section
      initial={{ x: '-500px', opacity: 0 }}
      animate={{ x: '0px', opacity: 1 }}
      transition={{ duration: 1 }}
      className={styles.Sidebar}
    >
      <h2 className={styles.Sidebar__title}>
        Date Month
      </h2>

      <h2 className={styles.Sidebar__subtitle}>
        2022
      </h2>

      <SidebarBlockList />

    </motion.section>
  )
}

export default Sidebar
