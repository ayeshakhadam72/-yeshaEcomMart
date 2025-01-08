import MyBestDealsproductx from '@/components/bestmydealsproduct'
import Goproiphonebanner from '@/components/goproiphonebanner'
import Headphoneitems from '@/components/headphoneitems'
import NavbarTypenameproducts from '@/components/NavbartypeName'
import MyProductBanners from '@/components/productsbanner'
import Topbrands from '@/components/topbrands'
import React from 'react'

const Headphone = ({Addproduct}) => {
  return (
  <>
  <MyProductBanners />
  <NavbarTypenameproducts/>
  <div className='mt-10'></div>
  <Headphoneitems/>
  <Goproiphonebanner/>
  <MyBestDealsproductx Addproduct={Addproduct}/>
  <Topbrands/>
  </>
  )
}

export default Headphone
