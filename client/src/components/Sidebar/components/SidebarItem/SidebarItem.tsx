import * as React from 'react'
import styles from './SidebarItem.module.scss'

interface SidebarItem {
  text: string;
}

const SidebarItem: React.FC<SidebarItem> = function SidebarItem({text}:SidebarItem) {
  return (
    <div className={text !== '' ? styles.SidebarItem : styles.SidebarItem_empty}>
      <p className={styles.SidebarItem_text}>
        {text}
      </p>
    </div>
  )
}

export default SidebarItem
