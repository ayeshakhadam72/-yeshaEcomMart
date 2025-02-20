import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { CartData } from '../../../context/cart';
import React, { useContext } from 'react';
import Reusecard from '../reusecard';
import Productdata from '../productdata';

const ThisWeekTrending = () => {
  const { Addproduct } = useContext(CartData)

  return (
    <>
      <div className="flex justify-center mt-20 mb-10">
        <div className="lg:w-[80%]">
          <h2 className="text-4xl font-semibold">Trending This Week</h2>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="lg:w-[80%]">
          {/* Swiper Slider */}
          <Swiper
            className=' '
            spaceBetween={20}
            slidesPerView={1}
            navigation
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 5 },
            }}
            modules={[Navigation, Pagination]}
          >
            {Productdata.map((b) => (
              <SwiperSlide key={b.productid} className='bg-transparent'>
                <Reusecard
                  border="mt-5 border-none hover:text-[#161880]"
                  image={b.productimage}
                  ImgClassName="w-52 h-52 object-contain flex m-auto"
                  heading={b.productname}
                  price="$720.00"
                  pricenew={b.productprice}
                  b={b}
                  Addproduct={Addproduct}
                  graytext={b.productstock}
                  stars=""
                  view="1 view"
                  New="sale"
                  NoShadow
                />
             
              </SwiperSlide>

            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ThisWeekTrending;


