import React from 'react'
import CardsAbout from '../reuseaboutcard'

import Team_11 from "../../../public/team_11.png"
import Team_41 from "../../../public/team_41.png"
import Team_31 from "../../../public/team_31.png"
import Team1 from "../../../public/team1.jpg"
import Team3 from "../../../public/team3.jpg"
import Team4 from "../../../public/team4.jpg"



const Meetteamabout = () => {
  return (
   <>
   <div className='flex justify-center  my-20'>
    <div className='w-[80%] justify-center  flex gap-10 flex-wrap'>
  
    <CardsAbout Image1={Team_11} founder={'Founder'} fonyWilliamson={'Fony Williamson'} />
   <CardsAbout Image1={Team_41} founder={'Founder'} fonyWilliamson={'Fony Williamson'} />
   <CardsAbout Image1={Team_31} founder={'Founder'} fonyWilliamson={'Fony Williamson'} />
   <CardsAbout Image1={Team4} founder={'Founder'} fonyWilliamson={'Fony Williamson'} />

   <CardsAbout Image1={Team3} founder={'Founder'} fonyWilliamson={'Fony Williamson'} />
   </div>
   </div>
   </>
  )
}

export default Meetteamabout

