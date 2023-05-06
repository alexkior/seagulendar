/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'
import { useSelector } from '../../../../redux/store'
import { SidebarItem } from '../SidebarItem'
import styles from './SidebarBlock.module.css'


const SidebarBlock: React.FC = function SidebarBlock() {  
  const selectedDay = useSelector((state: any) => state.selectedDay.selectedDay)
  const texts = selectedDay.content

  return (
    <div className={styles.SidebarBlock}>
      <h3 className={styles.SidebarBlock__title}>
        Plans:
      </h3>

      {texts && (<>
        {texts.map((text: string, index: number) => 
          <SidebarItem
            key={index}
            text={text}
            empty={false}
          />
        )}
      </>)}

      <SidebarItem
        text={''}
        empty={true}
      />
    </div>
  )
}

export default SidebarBlock
