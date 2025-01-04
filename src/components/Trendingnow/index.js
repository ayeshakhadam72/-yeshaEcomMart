
import React from 'react'
import Reusecard from '../reusecard'


import Productdata from '../productdata'


const Trendingnow = ( {Addproduct}) => {
  return (
   <>
  
   
   <div className='flex justify-center'>

   <div className='mx-5 lg:mx-0 lg:w-[80%] justify-center md:justify-normal flex gap-10 flex-wrap'>
{
  Productdata.slice(10,20).map((b) =>{
    return(
      <Reusecard border={'mt-5    border-none hover:text-[#161880]'} image={b.productimage}  heading =  {b.productname} price= {'$720.00'} pricenew= {b.productprice} b={b} Addproduct={Addproduct} 
      graytext={b.productstock}  stars={''} view={'1 view'}/>
    )
  })

}


</div>

   </div>

   </>
  )
}

export default Trendingnow
