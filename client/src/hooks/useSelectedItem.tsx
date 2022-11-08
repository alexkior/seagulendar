import * as React from 'react'

const currentDate = new Date(Date.now())
const createDate = currentDate.getDate()

export default function useSelectedItem(value: number) {
  console.log(value, 'useselecteditem value start')
  const [newSelectedItem, setNewSelectedItem] = React.useState(createDate)

  if (value !== newSelectedItem) {
    setNewSelectedItem(value)
  }
  console.log(newSelectedItem, 'useselecteditem usestate start')
  
  return newSelectedItem

}
