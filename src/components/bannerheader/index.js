

import Image from 'next/image'
import React from 'react'
import Twowatch from "../../../public/Twowatch.png"

const Bannerheader = () => {
  return (
   <>
   <div className=' bg-[#f6f7fb] md:flex md:justify-around md:py-11 md:gap-24'>

<div className='w-[100%]  pt-10 md:pt-0 justify-center text-center md:text-start  md:w-1/2 flex md:justify-end  md:items-center '>
<div className='w-[60%] ' >
<h2 className=' text-2xl xl:text-4xl text-black font-bold'>Relogio Faminino</h2>
<p className='py-3 text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolorum laudantium doloremque rem suscipit facilis. Natus explicabo molestiae quidem ad, excepturi corporis officiis dolores est praesentium possimus necessitatibus libero suscipit.</p>

<h2 className='text-[#eb6a2a] text-4xl font-bold py-5'> $1,200 <span className='text-2xl text-[#b6b6b7] font-normal '> <del>$1,500</del> </span>  </h2>

<button className='bg-[#eb6a2a] px-8 text-sm py-3 lg:px-10  text-white hover:bg-[#f37b3f] '>VIEW COLLECTION</button>
</div>
</div>

{/* 2nd div */}
<div className='w-1/2  m-auto pt-10 md:pt-0'>
<Image src={Twowatch}/>
</div>

   </div>
   </>
  )
}

export default Bannerheader
