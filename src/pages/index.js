import Bannerheader from '@/components/bannerheader'
import MyBannerhome from '@/components/bannerhomeheader'
import MyBestDealsproductx from '@/components/bestmydealsproduct'
import BestDealsproductx from '@/components/bestmydealsproduct'
import Collectionlist from '@/components/collectionlist'
import Country from '@/components/country'
import Discountproduct from '@/components/Discountproduct'
import Goproiphonebanner from '@/components/goproiphonebanner'
import Luxurywatch from '@/components/Luxurywatch'
import Marketo from '@/components/marketo'
import MostViewd from '@/components/mostviewd'
import Navbar from '@/components/navbar'
import NavbarTypenameproducts from '@/components/NavbartypeName'
import MyProductBanners from '@/components/productsbanner'
import ProductBanners from '@/components/productsbanner'
import ThisWeekTrending from '@/components/thisweektrending'
import Topbrands from '@/components/topbrands'
import Trendingnow from '@/components/Trendingnow'
import Twocontentimg from '@/components/Twocontentimg'
import React from 'react'

const Home = ({ Addproduct, basket, loader }) => {
  return (
  <>
  <MyProductBanners/>
 {/* <MyBannerhome/> */}
  {/* <Bannerheader /> */}
  {/* <Twocontentimg/> */}
  <NavbarTypenameproducts/>
  <Trendingnow Addproduct={Addproduct}  />
  <Goproiphonebanner/>
  <MyBestDealsproductx Addproduct={Addproduct}  />
  <Collectionlist/>
  {/* <Luxurywatch/> */}
  {/* <Discountproduct Addproduct={Addproduct} /> */}
  {/* <MostViewd  /> */}
  {/* <Trendingnow Addproduct={Addproduct}  /> */}


  <Topbrands/>
  
  {/* <Country/> */}

<ThisWeekTrending Addproduct={Addproduct} />
  <Marketo/>
 
  </>
  )
}

export default Home
