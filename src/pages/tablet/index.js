import MyBestDealsproductx from '@/components/bestmydealsproduct'
import Goproiphonebanner from '@/components/goproiphonebanner'
import NavbarTypenameproducts from '@/components/NavbartypeName'
import MyProductBanners from '@/components/productsbanner'
import Tabletlistitem from '@/components/tabletlistitems'
import Topbrands from '@/components/topbrands'
import React from 'react'

const Tablet = ({Addproduct}) => {
  return (
    <>
     <MyProductBanners/>
    <NavbarTypenameproducts/>
    <div className='mt-10'></div>
    <Tabletlistitem/>
    <Goproiphonebanner />
    <MyBestDealsproductx  Addproduct={Addproduct} />
    <Topbrands/>

    </>
  
  )
}

export default Tablet
