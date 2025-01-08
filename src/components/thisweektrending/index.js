import React from 'react';
import Reusecard from '../reusecard';
import Productdata from '../productdata';

// Import Swiper components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const ThisWeekTrending = ({ Addproduct }) => {
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
            {Productdata.slice(16, 25).map((b) => (
              <SwiperSlide key={b.productid} className='bg-transparent'>
                <Reusecard
                  border="mt-5 border-none hover:text-[#161880]"
                  image={b.productimage}
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
                {/* <p>

                  lorem lorem lorem lorem lorem lorem
                </p> */}
              </SwiperSlide>
          
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ThisWeekTrending;
