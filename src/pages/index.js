import Bannerheader from '@/components/bannerheader'
import MyBannerhome from '@/components/bannerhomeheader'
import Country from '@/components/country'
import Discountproduct from '@/components/Discountproduct'
import Luxurywatch from '@/components/Luxurywatch'
import Marketo from '@/components/marketo'
import MostViewd from '@/components/mostviewd'
import Navbar from '@/components/navbar'
import MyProductBanners from '@/components/productsbanner'
import ProductBanners from '@/components/productsbanner'
import Topbrands from '@/components/topbrands'
import Trendingnow from '@/components/Trendingnow'
import Twocontentimg from '@/components/Twocontentimg'
import React from 'react'

const Home = ({ Addproduct, basket, loader }) => {
  return (
    <>
      <MyProductBanners />
      {/* <MyBannerhome/> */}
      {/* <Bannerheader /> */}
      {/* <Twocontentimg/> */}
      <Trendingnow Addproduct={Addproduct} />
      <Topbrands />
      <Luxurywatch />
      <Discountproduct loader={loader} Addproduct={Addproduct} />
      <MostViewd />
      <Trendingnow Addproduct={Addproduct} />
      <Country />
      <Marketo />

    </>
  )
}

export default Home
