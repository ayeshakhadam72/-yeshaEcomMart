import Image from 'next/image'
import React from 'react'



import Topbrand5 from "../../../public/Topbrand5.png"
import Topbrand6 from "../../../public/Topbrand6.png"
import Topbrand1 from "../../../public/Topbrand1.png"
import Topbrand2 from "../../../public/Topbrand2.png"
import Topbrand3 from "../../../public/Topbrand3.png"
import Topbrand4 from "../../../public/Topbrand4.png"
import Magnet from '../Magnet'
const Topbrands = () => {
  return (
   <>
   <h2 className='text-4xl text-center mt-20 mb-10 font-semibold'>Experience Excellence with Our Top Brands </h2>
   <div className='py-10 flex justify-center items-center gap-20 xl:gap-32 flex-wrap bg-[#f1f3f7] px-3'>
 
    <div >
        <Magnet>

        <Image src={Topbrand5} /> 
        </Magnet>
        
    </div>
    <div>
    <Magnet>

    <Image src={Topbrand2} />
    </Magnet>
    </div>
    <div>
    <Magnet>

    <Image src={Topbrand1} />
    </Magnet>
    </div>
    <div>
    <Magnet>

    <Image src={Topbrand3} />
    </Magnet>
    </div>
    <div>
    <Magnet>

    <Image src={Topbrand4} />
    </Magnet>
    </div>
    <div>
    <Magnet>

    <Image src={Topbrand6} /> 
    </Magnet>
      
    </div>
   </div>
   </>
  )
}

export default Topbrands
