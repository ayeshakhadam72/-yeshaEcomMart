
import Image from 'next/image'
import React from 'react'


const CardsAbout = ({Image1,founder,fonyWilliamson}) => {
  return (
  <>
  <div >
<Image src={Image1} />
 <h2 className='text-blue-600 text-xl font-semibold text-center'>{founder}</h2>
<h2 className='text-black text-xl font-semibold text-center'> {fonyWilliamson}</h2>
  </div>
  
  </>
  )
}

export default CardsAbout