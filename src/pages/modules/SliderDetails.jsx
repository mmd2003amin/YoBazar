import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Navigation } from "swiper/modules";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const SliderDetails = ({ images }) => {
  return (
    <div className="w-full h-[26rem] overflow-hidden mx-auto">
      <Swiper
        effect={"cards"}
        loop={true}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        grabCursor={true}
        modules={[EffectCards, Navigation]}
        className="mySwiper w-8/12 h-[19rem] xs:w-72 xs:h-[23rem]"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index} className="centering rounded-2xl">
            <img src={item} alt="slide" className="h-full w-full" />
          </SwiperSlide>
        ))}
        <div className="centering mt-6 text-cyan-800 cursor-pointer">
          <FaLongArrowAltRight className="button-next-slide ml-1 size-6" />
          <FaLongArrowAltLeft className="button-prev-slide mr-1 size-6" />
        </div>
      </Swiper>
    </div>
  );
};

export default SliderDetails;
