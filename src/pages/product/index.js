import Addtoardproduct from '@/components/Addtocard'
import Bannerproduct from '@/components/Bannerproduct'
import Bestdeal from '@/components/Bestdeals'
import Headerafterabout from '@/components/headerafterabout'
import ItemsProduct from '@/components/Itemsavailable'
import Marketo from '@/components/marketo'
import Navbar from '@/components/navbar'
import ProductClickItems from '@/components/reuseAllproductStructure'
import Reusestructure from '@/components/ReuseStructuure'
import ThreeProductcard from '@/components/threeProductcard'
import React, { useState } from 'react'


const Product = ({basket, Addproduct, ali}) => {
  console.log(ali, 'ali')

  return (
    <>

<Headerafterabout Aboutus={"Product Category V2"} givespace={'mt-5'} />
     
      <Bannerproduct />
      {/* <ItemsProduct  /> */}
      {/* <ThreeProductcard Addproduct={Addproduct} /> */}
      {/* <Reusestructure  Addproduct={Addproduct} /> */}
      {/* <Addtoardproduct /> */}
      <ProductClickItems basket={basket} Addproduct={Addproduct}  />
      <Bestdeal Addproduct={Addproduct} />

      <Marketo/>
    </>
  )
}

export default Product
