import Image from 'next/image'
import React from 'react'



import Topbrand5 from "../../../public/Topbrand5.png"
import Topbrand6 from "../../../public/Topbrand6.png"
import Topbrand1 from "../../../public/Topbrand1.png"
import Topbrand2 from "../../../public/Topbrand2.png"
import Topbrand3 from "../../../public/Topbrand3.png"
import Topbrand4 from "../../../public/Topbrand4.png"
const Topbrands = () => {
  return (
   <>
   <h2 className='text-2xl text-center my-10 font-semibold'>Top Brands </h2>
   <div className='flex justify-center gap-20 xl:gap-32 flex-wrap px-3'>
 
    <div>
        <Image src={Topbrand5} /> 
         <Image src={Topbrand6} />
    </div>
    <div>
    <Image src={Topbrand2} />
    </div>
    <div>
    <Image src={Topbrand1} />
    </div>
    <div>
    <Image src={Topbrand3} />
    </div>
    <div>
    <Image src={Topbrand4} />
    </div>
   </div>
   </>
  )
}

export default Topbrands
