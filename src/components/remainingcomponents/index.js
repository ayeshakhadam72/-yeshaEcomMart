import React from 'react'

const index = () => {
  return (
   <>
   <div>
    {/* opr valy 2 div */}
   <Reusecard image={Watch2}  border={'border-none shadow-md'}  heading = {'Drones Helicopter '} price= {'$720.00'} pricenew={'$540.00 '}/>

<Reusecard image={Watch3}  border={'border-none shadow-md'}  heading = {'Drones Helicopter '} price= {'$720.00'} pricenew={'$540.00 '}/>


    {/* last three div */}
    <div className= 'justify-center flex gap-8 flex-wrap' >
<Reusecard image={Watch4}  border={'border-none shadow-md text-center'}  heading = {'Drones Helicopter '} price= {'$720.00'} pricenew={'$540.00 '}/>

<Reusecard image={Watch5}  border={'border-none shadow-md'}  heading = {'Drones Helicopter '} price= {'$720.00'} pricenew={'$540.00 '}/>

<Reusecard image={Watch1}  border={'border-none shadow-md'}  heading = {'Drones Helicopter '} price= {'$720.00'} pricenew={'$540.00 '}/>

</div>

</div>


   </>
  )
}

export default index
