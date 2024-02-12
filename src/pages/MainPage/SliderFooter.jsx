import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";

import sliderFooterData from "../../constant/sliderFooterData";
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";

const SliderFooter = () => {
  return (
    <div>
      <Swiper
        className="relative group mt-10 w-11/12 md:w-[98%]"
        spaceBetween={10}
        loop={true}
        slidesPerView={
          innerWidth > 650 && innerWidth < 950 ? 2 : innerWidth > 951 ? 3 : 1
        }
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        {sliderFooterData.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              src={item.image}
              alt="slider"
              className="w-full h-60 rounded-md relative cursor-pointer"
            />
          </SwiperSlide>
        ))}

        <FaCircleArrowLeft className="button-next-slide group-hover:left-2 left-[-40px] buttons-slider-header" />
        <FaCircleArrowRight className="button-prev-slide group-hover:right-2 right-[-40px] buttons-slider-header" />
      </Swiper>
    </div>
  );
};

export default SliderFooter;
