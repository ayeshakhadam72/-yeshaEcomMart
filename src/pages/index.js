import MyBestDealsproductx from '@/components/bestmydealsproduct'

import Collectionlist from '@/components/collectionlist'

import Goproiphonebanner from '@/components/goproiphonebanner'
import Marketo from '@/components/marketo'
import MyProductBanners from '@/components/productsbanner'
import SplashCursor from '@/components/SplashCursor'
import ThisWeekTrending from '@/components/thisweektrending'
import Topbrands from '@/components/topbrands'
import Trendingnow from '@/components/Trendingnow'
import React from 'react'

const Home = ({ Addproduct, basket, ProductLoad }) => {
  console.log(ProductLoad , 'Homep')
  return (
    <>
    <SplashCursor/>
      <MyProductBanners />
      <Trendingnow Addproduct={Addproduct} ProductLoad={ProductLoad}/>
      <Goproiphonebanner />
      <MyBestDealsproductx Addproduct={Addproduct} />
      <Collectionlist />





      <ThisWeekTrending Addproduct={Addproduct} />
      <Topbrands />
      <Marketo />

    </>
  )
}

export default Home
