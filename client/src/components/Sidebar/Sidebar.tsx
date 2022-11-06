import * as React from 'react'
import styles from './Sidebar.module.scss'

import { SliderBlock } from './components/SliderBlock'

const Sidebar: React.FC = function Sidebar() {
  return (
    <section className={styles.Sidebar}>
      <h2 className={styles.Sidebar__title}>
        Date Month
      </h2>

      <h2 className={styles.Sidebar__subtitle}>
        2022
      </h2>

      <SliderBlock />
    </section>
  )
}

export default Sidebar
