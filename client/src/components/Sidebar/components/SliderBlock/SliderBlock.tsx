import * as React from 'react'
import styles from './SliderBlock.module.scss'

const SliderBlock: React.FC = function SliderBlock() {
  return (
    <div className={styles.SliderBlock}>
      <h3 className={styles.SidebarBlock__title}>
        Plans:
      </h3>

      {/* <div className={styles.SidebarBlock__test_element}>
        
      </div> */}
    </div>
  )
}

export default SliderBlock
