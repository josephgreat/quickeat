import { Button } from '@chakra-ui/react'
import React from 'react'

const Btn = ({children, bg, color, onClick}) => {
  return (
    <Button bg={bg} onClick={onClick} color={color} borderRadius={"1.1rem"} py="6">{children}</Button>
  )
}

export default Btn