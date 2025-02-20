

import Mycheckout from '@/components/mycheckout'
import React from 'react'

const CheckOut = ({ basket }) => {
  return (
    <>
      {
        basket?.length == 0 ? <h1> Empty Cart </h1> :
          <Mycheckout basket={basket} />

      }

    </>
  )
}

export default CheckOut
