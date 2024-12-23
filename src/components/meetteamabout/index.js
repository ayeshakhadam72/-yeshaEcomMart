import React from 'react'
import CardsAbout from '../reuseaboutcard'

import Team_11 from "../../../public/team_11.png"



const Meetteamabout = () => {
  return (
   <>
   <div className='flex justify-center gap-10 flex-wrap my-20'>
   <CardsAbout Image1={Team_11} founder={'Founder'} fonyWilliamson={'Fony Williamson'} />
   <CardsAbout Image1={Team_11} founder={'Founder'} fonyWilliamson={'Fony Williamson'} />
   <CardsAbout Image1={Team_11} founder={'Founder'} fonyWilliamson={'Fony Williamson'} />
   <CardsAbout Image1={Team_11} founder={'Founder'} fonyWilliamson={'Fony Williamson'} />
   </div>
   </>
  )
}

export default Meetteamabout

