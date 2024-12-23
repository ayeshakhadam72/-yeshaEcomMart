
import React from 'react'
import Reusecard from '../reusecard'

import Watch1 from "../../../public/Watch1.jpg"
import Watch2 from "../../../public/Watch2.jpg"
import Watch3 from "../../../public/Watch3.jpg"
import Watch4 from "../../../public/Watch4.jpg"
import Productdata from '../productdata'


const Trendingnow = ( {Addproduct}) => {
  return (
   <>
  
   
   
<div className='flex justify-center gap-10 flex-wrap '>
{
  Productdata.slice(0,1).map((b) =>{
    return(
      <Reusecard border={'border-none'} image={b.productimage} graytext = {' Drone'} heading =  {b.productname} price= {'$720.00'} pricenew={b.productprice} b={b} Addproduct={Addproduct} />
    )
  })

}


</div>
   </>
  )
}

export default Trendingnow
