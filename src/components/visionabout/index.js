import Image from 'next/image'
import React from 'react'
import { FaCheck } from "react-icons/fa";

import Imageabout2 from "../../../public/Imageabout2.png"

const Visionabout = () => {
  return (
    <>
    {/* [#f6f7fb]f1f3f7 */}
     <div className='mt-6   md:flex md:justify-around md:py-11 md:gap-24 px-3 '>



<div className='lg:w-1/2 md:flex md:justify-end  pt-10 md:pt-0'>
<Image  className='m-auto md:m-0' src={Imageabout2}  />
</div>


{/* 2nd div */}
<div className=' pt-3 ms:pt-10 md:pt-0 justify-center text-center lg:text-start  lg:w-1/2 flex lg:justify-start  lg:items-center '>
<div className='w-[60%] ' >
<h2 className='text-5xl md:text-6xl xl:text-8xl font-bold text-gray-200 pb-2'>HISTORY</h2>

<h2 className='mt-[-40px] text-sm text-[#98c35a] font-semibold'>OUR HISTORY</h2>
<p className='text-sm sm:text-2xl xl:text-4xl text-black font-semibold'> We are marketpress. </p>
<p className='py-5 text-[10px] sm:text-sm'>Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p>

<h2 className='flex gap-2 items-center text-[10px] sm:text-sm xl:text-xl'> <FaCheck className='text-[#83b735] ' /> Credibly innovate granular internal</h2>

<h2 className='flex gap-2 items-center text-[10px] sm:text-sm xl:text-xl'> <FaCheck className='text-[#83b735] ' />Grantedly underconstructions reloaded</h2>

<h2 className='flex gap-2 items-center text-[10px] sm:text-sm xl:text-xl'> <FaCheck className='text-[#83b735] ' /> Interactively procrastinate high-payoff</h2>

<h2 className='flex gap-2 items-center text-[10px] sm:text-sm xl:text-xl'> <FaCheck className='text-[#83b735] ' /> Completely synergize resource taxing relationships</h2>

<h2 className='flex gap-2 items-center text-[10px] sm:text-sm xl:text-xl'> <FaCheck className='text-[#83b735] ' /> Credibly innovate granular internal</h2>




</div>
</div>
   </div>
    
    </>
  )
}

export default Visionabout
