import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";

import sliderHeaderData from "../../constant/SliderHeaderData";
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SliderHeader = () => {
  return (
    <div>
      <Swiper
        className="relative group"
        modules={[Navigation, Autoplay]}
        loop={true}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        {sliderHeaderData.map((item) => (
          <SwiperSlide key={item.id}>
            <Link to={item.path}>
              <img
                src={item.image}
                alt="slider"
                className="w-full h-44 md:h-80 lg:h-[30rem] relative cursor-pointer"
              />
            </Link>
          </SwiperSlide>
        ))}

        <FaCircleArrowLeft className="button-next-slide group-hover:left-2 left-[-40px] buttons-slider-header" />
        <FaCircleArrowRight className="button-prev-slide group-hover:right-2 right-[-40px] buttons-slider-header" />
      </Swiper>
    </div>
  );
};

export default SliderHeader;
