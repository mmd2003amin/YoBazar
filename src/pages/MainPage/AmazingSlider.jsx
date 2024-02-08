import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../features/data/dataSlice";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import SlideAmazing from "./SlideAmazing";

const AmazingSlider = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data.amazing);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div className="centering flex-col md:flex-row md:justify-between mx-auto bg-cyan-700 w-11/12 md:w-[98%] rounded-md mt-10">
      <img src="/assets/amazingSlider/logo.png" alt="logo" className="md:mx-7" />
      <Swiper
        spaceBetween={16}
        slidesPerView={
          innerWidth > 550 && innerWidth < 900
            ? 2
            : innerWidth > 901 && innerWidth < 1142
            ? 2.5
            : innerWidth > 1142
            ? 3.5
            : 1.5
        }
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className="w-11/12 mx-auto relative md:mx-12 group"
      >
        {data &&
          data.map((item) => (
            <SwiperSlide key={item.id} className="mt-14 cursor-pointer">
              <SlideAmazing data={item} />
            </SwiperSlide>
          ))}

        <FaCircleArrowLeft className="button-next-slide group-hover:left-2 left-[-40px] text-cyan-800 buttons-slider-header" />
        <FaCircleArrowRight className="button-prev-slide group-hover:right-2 right-[-40px] text-cyan-800 buttons-slider-header" />
      </Swiper>
    </div>
  );
};

export default AmazingSlider;
