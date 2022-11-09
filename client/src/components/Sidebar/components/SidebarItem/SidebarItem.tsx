import * as React from 'react'
import { motion } from 'framer-motion'

import styles from './SidebarItem.module.scss'

interface SidebarItem {
  text: string;
  empty: boolean;
}

const SidebarItem: React.FC<SidebarItem> = function SidebarItem({text, empty}:SidebarItem) {
  return (
    <>
      {empty ? (
        <>
          <button
            className={styles.SidebarItem_empty}
          >
            <p className={styles.SidebarItem_create_button}>
                + 
            </p>
          </button>
        </>
      ) : (
        <>
          <div 
            className={styles.SidebarItem}
          >
            <p className={styles.SidebarItem_text}>
              {text}
            </p>
          </div>
        </>
      )}
    </>
  )
}

export default SidebarItem
