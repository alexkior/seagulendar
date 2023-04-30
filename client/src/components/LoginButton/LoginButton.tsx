import * as React from 'react'
import { motion } from 'framer-motion'
import styles from './LoginButton.module.scss'
import { useEffect, useState } from 'react'
import TelegramLoginButton, {
  TelegramUser,
} from '@v9v/ts-react-telegram-login'

const handleTelegramResponse = (user: TelegramUser) => {
  console.log(user)
}

function LoginButton() {
  return (
    <div>
      <b>Shalom!</b>
      <br />
      <TelegramLoginButton
        dataOnAuth={handleTelegramResponse}
        botName="seagulendar_bot"
      />
    </div>
  )
}

export default LoginButton
