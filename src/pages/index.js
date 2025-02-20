
import MyBestDealsproductx from '@/components/bestmydealsproduct'
import Collectionlist from '@/components/collectionlist'
import CosmosBackground from '@/components/cosmos-background'
import Goproiphonebanner from '@/components/goproiphonebanner'
import Marketo from '@/components/marketo'
import MyProductBanners from '@/components/productsbanner'
import ThisWeekTrending from '@/components/thisweektrending'
import Topbrands from '@/components/topbrands'
import Trendingnow from '@/components/Trendingnow'
import React from 'react'

const Home = () => {

  return (
    <>


      <MyProductBanners />
      <Trendingnow />
      <Goproiphonebanner />
      <MyBestDealsproductx />
      <Collectionlist />
      <ThisWeekTrending />
      <Topbrands />
      <Marketo />

    </>
  )
}

export default Home


