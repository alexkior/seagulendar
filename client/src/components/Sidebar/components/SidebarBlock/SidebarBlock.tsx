import * as React from 'react'
import { useSelector } from '../../../../redux/store'


import { SidebarItem } from '../SidebarItem'

import styles from './SidebarBlock.module.scss'


const SidebarBlock: React.FC = function SidebarBlock() {  
  const selected = useSelector((state: any) => state.selected.selectedItem)
  const texts = selected.content
  return (
    <div className={styles.SidebarBlock}>
      <h3 className={styles.SidebarBlock__title}>
        Plans:
      </h3>

      {texts ? (<>
        {texts.map((text: string, index: number) => 
          <SidebarItem
            key={index}
            text={text}
          />
        )}
        <SidebarItem
          text={''}
        />
      
      </>) : (<>
        <SidebarItem
          text={''}
        />
      </>)}


    </div>
  )
}

export default SidebarBlock
