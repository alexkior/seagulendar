import * as React from 'react'
import { motion } from 'framer-motion'

// import seagul from '../../assets/seagull.svg'

import styles from './Header.module.scss'

const Header: React.FC = function Header() {
  return (
    <>
      <header className={styles.Header}>
        {/* <img className={styles.Header__seagull} src={seagul} alt="seagull" /> */}

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className={styles.Header__userName}
        >
          UserName
        </motion.h2>
        <h1 className={styles.Header__projectName}>Seagulendar</h1>
      </header>
    </>
  )
}

export default Header
