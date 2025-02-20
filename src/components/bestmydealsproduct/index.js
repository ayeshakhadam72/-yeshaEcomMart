import React, { useContext } from 'react'
import Reusecard from '../reusecard'


import Productdata from '../productdata'
import { CartData } from '../../../context/cart'

const MyBestDealsproductx = () => {
  const {Addproduct} = useContext(CartData)
  return (
    <>

      <div className='w-full flex justify-center mt-20'>
        <div className=' w-[80%] '>
          <h2 className='text-4xl font-semibold uppercase'>Best Deals Product</h2>
          <div className='w-full  xl:flex gap-3 mt-20'>

            <div className=' lg:w-[30%] rounded-lg sideayeshamy'>
              <div className='  p-16 rounded-lg  text-white ' >
                <h2 className='text-2xl font-semibold  '>Unbeatable Discounts Await!</h2>
                <p className='py-5'>Take advantage of this opportunity to acquire your favorite products at unbeatable prices. Each deal is carefully selected to ensure you receive the best value and top-notch quality.</p>
                <button className='bg-white text-black px-4 py-2 rounded-md' >Show Now</button>

              </div>
            </div>
            {/*  */}
            <div className='xl:w-[70%] flex gap-4 flex-wrap'>
              {
                Productdata.slice(0, 8).map((b , index) => {
                  return (
                   <div key={index}>
                     <Reusecard border={' rounded-lg  border-none hover:text-[#161880]'} image={b.productimage} heading={b.productname} price={'$720.00'} pricenew={b.productprice} b={b} Addproduct={Addproduct}
                      graytext={b.productstock} />
                    </div>
                  )
                })

              }


            </div>


          </div>



        </div>
      </div>

    </>
  )
}

export default MyBestDealsproductx
