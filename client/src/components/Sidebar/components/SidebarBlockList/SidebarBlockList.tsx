import * as React from 'react'

import { SidebarBlock } from '../SidebarBlock'
import styles from './SidebarBlockList.module.css'

const SidebarBlockList: React.FC = function SidebarBlockList() {
  return (
    <div className={styles.SidebarBlockList}>
      <SidebarBlock />
    </div>
  )
}

export default SidebarBlockList
