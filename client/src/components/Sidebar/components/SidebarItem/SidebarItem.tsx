import * as React from 'react'
import { motion } from 'framer-motion'

import styles from './SidebarItem.module.scss'

interface SidebarItem {
  text: string;
  empty: boolean;
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItem> = function SidebarItem({ text, empty }: SidebarItem) {
  const [ itemOpen, setItemOpen ] = React.useState(true)
  
  return (
    <button
      className={empty ? styles.SidebarItem_empty : styles.SidebarItem}>
      {empty ? (
        <>
          <p className={styles.SidebarItem_create_button}>
              + 
          </p>
        </>
      ) : (
        <>
          <p className={styles.SidebarItem_text}>
            {text}
          </p>
        </>
      )}
    </button>
  )
}

export default SidebarItem
