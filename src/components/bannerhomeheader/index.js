import Image from 'next/image'
import React from 'react'


import Mybanner from "../../../public/bannerhomeheader.png"
const MyBannerhome = () => {
  return (
    <div>
      <Image src={Mybanner} />
    </div>
  )
}

export default MyBannerhome
