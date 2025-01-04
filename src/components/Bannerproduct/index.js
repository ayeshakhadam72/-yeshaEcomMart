import Image from 'next/image'
import React from 'react'

import Bannerproductimg from "../../../public/bannermypro.webp"
const Bannerproduct = () => {
  return (
    <>
 
<div className=' flex justify-center mt-10'>
{/* gradient-to-r from-[#f5b908] to-[#7fd858] */}

  <div className='lg:w-[80%] xl:w-[60%]  md:flex bg-[#017227]'>
<div className='content md:w-[50%]  flex justify-center items-center'>

<div className='text-white w-[70%] text-center py-5'>
  <h2 className='text-2xl md:text-4xl font-semibold '>Track Your Order</h2>
  <p className='text-md pt-5'>"Track your orders effortlessly with our user-friendly order tracking system, providing real-time updates on the status of your purchases."</p>
</div>
</div>


<div className='md:w-[50%] flex justify-center items-center '>
<Image src={Bannerproductimg} className=' h-[20%]  md:h-[90%] ' />

</div>
  </div>
</div>

    </>
  )
}

export default Bannerproduct
