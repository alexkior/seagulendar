import * as React from 'react'
import { useSelector } from '../../../../redux/store'

import styles from './SidebarBlockList.module.scss'

const SidebarBlockList: React.FC = function SidebarBlockList() {
  const selected = useSelector((state: any) => state.selected.selectedItem)

  return (
    <div className={styles.SidebarBlockList}>
      <div className={styles.SidebarBlock}>
        <h3 className={styles.SidebarBlock__title}>
          Plans:
        </h3>

        <div className={styles.SidebarBlock__test_element_empty}>
          <p>
            {selected.content}

          </p>
        </div>
      </div>
    </div>
  )
}

export default SidebarBlockList
