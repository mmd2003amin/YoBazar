import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";

import sliderHeaderData from "../../constant/SliderHeaderData";
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";

const SliderHeader = () => {
  return (
    <div>
      <Swiper
        className="relative group"
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {sliderHeaderData.map((item) => (
          <SwiperSlide>
            <img
              src={item.image}
              alt="slider"
              className="w-full h-[30rem] relative cursor-pointer"
            />
          </SwiperSlide>
        ))}

        <FaCircleArrowLeft className="button-next-slide group-hover:left-2 left-[-40px] buttons-slider-header" />
        <FaCircleArrowRight className="button-prev-slide group-hover:right-2 right-[-40px] buttons-slider-header" />
      </Swiper>
    </div>
  );
};

export default SliderHeader;
