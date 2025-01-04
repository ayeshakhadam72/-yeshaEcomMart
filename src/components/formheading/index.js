

import Image from 'next/image'
import React from 'react'
import Frame11 from '../../../public/Frame_1.png'

const Formheading = () => {
  return (
   <>

<div  className=' pt-[28px] flex justify-center'>
      {/* <div className='w-[45%]'>
        <h2 className='text-[42px] font-title font-[700] '>
        Get in touch</h2>
        <p className='text-[14px] font-rubik font-[400] pt-[21px] text-[#4a4a50] '>Fundpress site thoughtfully designed for real humans which means the best user experience for your entire community of donors, fundraisers, customers, and staff.</p>
      </div> */}
<Image src={Frame11}/>

      </div>
   </>
  )
}

export default Formheading
 

