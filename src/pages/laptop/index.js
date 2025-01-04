import MyBestDealsproductx from '@/components/bestmydealsproduct'
import Goproiphonebanner from '@/components/goproiphonebanner'
import LaptopListitem from '@/components/laptoplist'
import NavbarTypenameproducts from '@/components/NavbartypeName'
import MyProductBanners from '@/components/productsbanner'
import Topbrands from '@/components/topbrands'
import React from 'react'

const Laptoplist = ({Addproduct}) => {
  return (
   <>
   <MyProductBanners/>
   <NavbarTypenameproducts/>
<div className='mt-10'></div>
   <LaptopListitem/>
   <Goproiphonebanner/>
   <MyBestDealsproductx  Addproduct={Addproduct}/>
   <Topbrands/>
   </>
  )
}

export default Laptoplist
