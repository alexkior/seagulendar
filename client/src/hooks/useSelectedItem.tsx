import * as React from 'react'

export default function useSelectedItem(value: number) {
  const [newSelectedItem, setNewSelectedItem] = React.useState(value)

  console.log(newSelectedItem)
  
  if (value !== newSelectedItem) {
    return setNewSelectedItem(value)
  } else {
    return newSelectedItem
  }

}
