import MyBestDealsproductx from '@/components/bestmydealsproduct'
import Goproiphonebanner from '@/components/goproiphonebanner'
import Mobilelist from '@/components/mobilelistmy'
import NavbarTypenameproducts from '@/components/NavbartypeName'
import MyProductBanners from '@/components/productsbanner'
import Topbrands from '@/components/topbrands'
import React from 'react'

const MobileList = ({Addproduct}) => {
  return (
    <>

    <MyProductBanners/>
    <NavbarTypenameproducts/>

    <div className='mt-10'></div>
   <Mobilelist/>
   <Goproiphonebanner/>
   <MyBestDealsproductx  Addproduct={Addproduct}/>
   <Topbrands/>
    </>
  )
}

export default MobileList
