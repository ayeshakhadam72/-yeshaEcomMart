import Image from 'next/image'
import React from 'react'
import Ff1min from "../../../public/Ff1min.jpg"

import F2min from "../../../public/F2min.jpg"

const Twocontentimg = () => {
  return (
   <>
<div className=' flex justify-center md:py-20 md:gap-14 gap-2 '> 
    <div className='p-1' >
        <Image src={Ff1min}/>
    </div>
    <div  className=' p-1 '>
      <Image src={F2min} />
    </div>
</div>

<div>
    <h2 className='text-4xl font-semibold text-center mt-9 md:mt-0'>Trending Now</h2>

</div>
   </>
  )
}

export default Twocontentimg
