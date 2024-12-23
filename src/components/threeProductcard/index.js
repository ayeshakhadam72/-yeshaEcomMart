
import React from 'react'

import Shop1img from "../../../public/Shop1img.jpg"
import Shop3img from "../../../public/Shop3img.jpg"
import Shop2img from "../../../public/Shop2img.jpg"
import AgainreuseProduct from '../Againreuseproductfour'
import Productdata from '../productdata'

const ThreeProductcard = ({Addproduct , b}) => {
  return (
   <>
   <div>
   <div className=' w-full flex mt-32 '>
    <div className='sm:flex flex-wrap flex justify-center  sm:justify-around '> 
      {
       Productdata.slice(12,20).map((b) =>{
        return(
<AgainreuseProduct image2 ={b.productimage}  border={'border-none text-center shadow-xl '}  heading = {b.productname} price= {'$720.00'} pricenew={'$540.00 '} Addproduct={Addproduct} b={b} />
        )
      }) }


{/* <AgainreuseProduct image2 ={Shop3img}  border={'border-none '}  heading = {'Princess bed skirt Lace'} price= {'$720.00'} pricenew={'$540.00 '}/>

<AgainreuseProduct image2 ={Shop2img}  border={'border-none '}  heading = {'Touchscreen Laptop '} price= {'$720.00'} pricenew={'$540.00 '}/> */}
</div>
</div>
   </div>
   </>
  )
}

export default ThreeProductcard
