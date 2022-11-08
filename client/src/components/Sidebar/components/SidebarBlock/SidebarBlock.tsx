import * as React from 'react'

import styles from './SidebarBlock.module.scss'

const SidebarBlock: React.FC = function SidebarBlock() {  
  return (
    <div className={styles.SidebarBlock}>
      <h3 className={styles.SidebarBlock__title}>
        Plans:
      </h3>

      {/* <div className={styles.SidebarBlock__test_element}>
        
      </div> */}
    </div>
  )
}

export default SidebarBlock
