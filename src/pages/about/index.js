import Bannerabout from '@/components/bannerabout'
import Handshakebanner from '@/components/handshakingbanner'
import Headerafterabout from '@/components/headerafterabout'
import Marketo from '@/components/marketo'
import Meetteamabout from '@/components/meetteamabout'
import Mineabout from '@/components/mineaboutbanner'
import Navbar from '@/components/navbar'
import Newsletterabout from '@/components/newsletter'
import Teamcardcontent from '@/components/teamcardcontent'
import Visionabout from '@/components/visionabout'
import React from 'react'

const About = () => {
  return (
   <>
  <Headerafterabout Aboutus = {'About us'} />
  <Mineabout/>

  <Bannerabout/>
  <Visionabout/>
  <Handshakebanner/>

  <Teamcardcontent/>
 <Meetteamabout/>
 {/* <Meetteamabout/> */}
 <Newsletterabout/>
 <Marketo/>
  

   </>
  )
}

export default About
