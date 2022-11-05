import * as React from 'react'

import seagul from '../../assets/seagull.svg'

import styles from './Menu.module.scss'

const Menu: React.FC = function Menu() {
  return (
    <>
      <header className={styles.Menu}>
        <img className={styles.Menu__seagull} src={seagul} alt="seagull" />

      </header>
    </>
  )
}

export default Menu
