import React from 'react'
import Reusecard from '../reusecard'


import Productdata from '../productdata'
const ThisWeekTrending = ({Addproduct}) => {
  return (
   <>
   
<div className='flex justify-center mt-20 mb-10'>
    <div className='lg:w-[80%]'>
<h2 className='text-4xl font-semibold '>Trending This Week</h2>

    </div>
</div>

   <div className='flex justify-center'>
    
   <div className='mx-5 lg:mx-0 lg:w-[80%] justify-center md:justify-normal flex gap-10 flex-wrap'>

{
  Productdata.slice(20,25).map((b) =>{
    return(
        
      <Reusecard border={'mt-5    border-none hover:text-[#161880]'} image={b.productimage}  heading =  {b.productname} price= {'$720.00'} pricenew= {b.productprice} b={b} Addproduct={Addproduct} 
      graytext={b.productstock}  stars={''} view={'1 view'}  New={'sale'} />
    )
  })

}


</div>

   </div>
   
   </>
  )
}

export default ThisWeekTrending
