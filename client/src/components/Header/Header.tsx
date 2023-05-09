import * as React from 'react'
import { motion } from 'framer-motion'
import styles from './Header.module.css'
import { LoginButton } from '@telegram-auth/react'

const Header: React.FC = function Header() {
  const mockUser = {
    auth_date: 1682895926,
    first_name: 'Alexey',
    hash: '898703291eb4b77d7600ca140f66a52389f5fe21199e82da7c4d2303ae17f4c6',
    id: 222548982,
    last_name: 'Kior',
    photo_url:
      'https://t.me/i/userpic/320/sZYMIpjHmSMoU8c79_VSG5vybC_7KAvYkH2ns7OAP3s.jpg',
    username: 'alexki0r',
  }

  return (
    <>
      <header className={styles.Header}>
        {/* <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className={styles.Header__userName}
          onClick={() => console.log(mockUser)}
        >
          Get User
        </motion.button> */}
        <LoginButton
          botUsername="seagulendar_bot"
          onAuthCallback={(data) => {
            console.log(data)
          }}
          // authCallbackUrl="http://localhost:3000/login"
          buttonSize="small" // "large" | "medium" | "small"
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
