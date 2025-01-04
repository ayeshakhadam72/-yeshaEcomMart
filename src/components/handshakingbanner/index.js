import Image from 'next/image'
import React from 'react'


import Frame1 from "../../../public/Frame_1.png"
const Handshakebanner = () => {
  return (
    <div>
      <Image className='h-[276px] w-[1920px]' src={Frame1}/>
    </div>
  )
}

export default Handshakebanner
