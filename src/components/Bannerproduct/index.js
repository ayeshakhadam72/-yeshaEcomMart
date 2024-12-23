import Image from 'next/image'
import React from 'react'

import Bannerproductimg from "../../../public/bannermypro.png"
const Bannerproduct = () => {
  return (
    <>
    <div className='flex justify-center mt-24'>

        <Image src={Bannerproductimg} className=' h-[20%] ' />
    </div>
    </>
  )
}

export default Bannerproduct
