import * as React from 'react'

import seagul from '../../assets/seagull.svg'

import styles from './Header.module.scss'

const Header: React.FC = function Header() {
  return (
    <>
      <header className={styles.Header}>
        <img className={styles.Header__seagull} src={seagul} alt="seagull" />

      </header>
    </>
  )
}

export default Header
