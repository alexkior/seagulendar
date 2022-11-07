import * as React from 'react'
import styles from './SidebarBlockList.module.scss'

const SidebarBlockList: React.FC = function SidebarBlockList() {
  return (
    <div className={styles.SidebarBlockList}>
      <div className={styles.SidebarBlock}>
        <h3 className={styles.SidebarBlock__title}>
          Plans:
        </h3>

        <div className={styles.SidebarBlock__test_element_empty}>
          
        </div>
      </div>
    </div>
  )
}

export default SidebarBlockList
