import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../features/data/dataSlice";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import Card from "./Card";

const AmazingSlider = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.products.amazing);
  const [showButton, setShowButton] = useState(null);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div
      onMouseEnter={() => setShowButton(true)}
      onMouseLeave={() => setShowButton(null)}
      className="centering flex-col md:flex-row md:justify-between mx-auto bg-cyan-700 w-11/12 md:w-[98%] rounded-md mt-10"
    >
      <img
        src="/assets/amazingSlider/logo.png"
        alt="logo"
        className="md:mx-7"
      />
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
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className="w-11/12 mx-auto relative md:mx-12"
      >
        {data &&
          data.map((item) => (
            <SwiperSlide key={item.id} className="mt-14 cursor-pointer">
              <Card data={item} name="slider" />
            </SwiperSlide>
          ))}

        <FaCircleArrowLeft
          className={`button-next-slide text-cyan-800 buttons-slider-header ${
            showButton ? "left-2" : "-left-10"
          }`}
        />
        <FaCircleArrowRight
          className={`button-prev-slide text-cyan-800 buttons-slider-header ${
            showButton ? "right-2" : "-right-10"
          }`}
        />
      </Swiper>
    </div>
  );
};

export default AmazingSlider;
