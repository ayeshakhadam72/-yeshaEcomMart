
import React, { useContext, useState } from 'react'
import Reusecard from '../reusecard'


import Productdata from '../productdata'
import { FaSpinner } from 'react-icons/fa'
import Image from 'next/image'
import { CartData } from '../../../context/cart'

const Trendingnow = () => {
  const { Addproduct, ProductLoad } = useContext(CartData)
  const [valueShow, setValueShow] = useState('Mobile')
  const [loader, setLoader] = useState(false);

  setTimeout(() => {
    setLoader(false)
  }, 2000);

  const Laptops = () => {
    setValueShow('Laptop')
    setLoader(true)

  }
  const mobilePhones = () => {
    setValueShow('Mobile')
    setLoader(true)
  }
  const AlleadPhones = () => {
    setValueShow('Headphone')
    setLoader(true)

  }
  const AllmyWatches = () => {
    setValueShow('Watches')
    setLoader(true)

  }
  const Tabs = () => {
    setValueShow('Tab')
    setLoader(true)
  }

  console.log(valueShow)
  const filterarray = Productdata.filter((b) => b.categery === (valueShow))
  return (
    <>
      <div className='flex justify-center '>
        <div className=''>
          <h2 className=' text-2xl sm:text-4xl uppercase text-center font-semibold pt-16 pb-5 '>Trending Products</h2>
          <ul className='text-sm items-center  flex space-x-2 sm:space-x-4 md:space-x-10 sm:text-xl font-semibold py-10'>


            <li className={`${valueShow == 'Mobile' && "bg-black text-white p-3 rounded-md px-5  cursor-pointer"}`} >
              <span className='cursor-pointer uppercase hover:bg-black hover:text-white hover:rounded-md hover:px-5 px-5 py-3 hover:py-3' onClick={mobilePhones} >Mobile</span>
            </li>
            <li className={`${valueShow == 'Watches' && "bg-black text-white p-3 rounded-md px-5  cursor-pointer"}`}>
              <span className={` cursor-pointer uppercase hover:bg-black hover:text-white hover:rounded-md hover:px-5 px-5 py-3 hover:py-3`} onClick={AllmyWatches}> Watches</span>
            </li>
            <li className={`${valueShow == 'Headphone' && "bg-black text-white p-3 rounded-md px-5  cursor-pointer"}`}>
              <span className='cursor-pointer uppercase hover:bg-black hover:text-white hover:rounded-md hover:px-5 px-5 py-3 hover:py-3' onClick={AlleadPhones}>Headphones</span>
            </li>
            <li className={`${valueShow == 'Tab' && "bg-black text-white p-3 rounded-md px-5  cursor-pointer"}`}>
              <span className='cursor-pointer uppercase hover:bg-black hover:text-white hover:rounded-md hover:px-5 px-5 py-3 hover:py-3' onClick={Tabs}>Tablets</span>
            </li>
            <li className={`${valueShow == 'Laptop' && "bg-black text-white p-3 rounded-md px-5  cursor-pointer"}`}>
              <span className='cursor-pointer uppercase hover:bg-black hover:text-white hover:rounded-md hover:px-5 px-5 py-3 hover:py-3' onClick={Laptops} >Cameras</span>
            </li>
          </ul>
        </div>
      </div>


      <div className='flex justify-center items-center' >
        {

          loader && <div className='bg-slate-400 p-3 rounded-lg absolute'>
            <FaSpinner className='animate-spin ' />
          </div>
        }
        <div className={`mx-5 lg:mx-0 lg:w-[80%]   justify-center md:justify-normal flex gap-10 flex-wrap ${loader && 'opacity-50'}`}>


          {
            filterarray.map((b , index) => {
              return (
                <div key={index}>
                  <Reusecard ProductLoad={ProductLoad} border={'mt-5    border-none hover:text-[#161880]'} image={b.productimage} heading={b.productname} price={'$720.00'} pricenew={b.productprice} b={b} Addproduct={Addproduct}
                    graytext={b.productstock} stars={''} view={'1 view'} />
                </div>
              )
            })

          }


        </div>

      </div>

    </>
  )
}

export default Trendingnow
