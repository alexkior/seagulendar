import * as React from 'react'
import { motion } from 'framer-motion'
import styles from './Header.module.scss'
import { LoginButton } from '@telegram-auth/react'

const Header: React.FC = function Header() {
  return (
    <>
      <header className={styles.Header}>
        {/* <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className={styles.Header__userName}
        >
          UserName
        </motion.h2> */}
        <LoginButton
          botUsername="seagulendar_bot"
          onAuthCallback={(data) => {
            console.log(data)
            
          }}
          // authCallbackUrl="http://localhost:3000/login"
          buttonSize="large" // "large" | "medium" | "small"
          cornerRadius={5} // 0 - 20
          showAvatar={true} // true | false
          lang="en"
        />

        <h1 className={styles.Header__projectName}>Seagulendar</h1>
      </header>
    </>
  )
}

export default Header
