

import Mycheckout from '@/components/mycheckout'
import React from 'react'

const CheckOut = ({basket}) => {
  return (
   <>
   <Mycheckout basket={basket} />
   </>
  )
}

export default CheckOut
