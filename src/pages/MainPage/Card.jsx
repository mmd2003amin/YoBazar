import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavorites, deleteFavorites } from "../../features/favorites/favoritesSlice";
import Notify, { notify } from "../../utils/Notify";
import { IoMdStats, IoIosSearch, IoMdHeart } from "react-icons/io";

const Card = ({ data , name }) => {
  const [hover, setHover] = useState(null);
  const page = window.location.pathname;
  const navigate = useNavigate();
  
  const favorites = useSelector((state) => state.favorites.products);
  const dispatch = useDispatch();
  const haveFavorites = favorites && favorites.find(item => item.id === data.id)
  const filterFavorites = favorites && favorites.filter(item => item.id !== data.id);

  const addToFavoritesHandler = (e) => {
    e.stopPropagation();

    if (!haveFavorites) {
      dispatch(addFavorites(data));
      notify("success","به علاقه‌مندی‌اضافه شد!");
    } else if(haveFavorites) {
      e.stopPropagation();
      dispatch(deleteFavorites(filterFavorites));
      notify("success","از علاقه‌مندی حذف شد!");
    }
  };

  return (
    <div 
     onMouseEnter={() => setHover(true)} 
     onMouseLeave={() => setHover(null)} 
     onClick={() => navigate(
      `${name === "detail" || page === `${page}/${data.id}`
      ? `/${data.page}/${data.id}` 
      : `${page === "/" 
      ? `${data.page}/${data.id}` 
      : `${page === `${page}/${data.id}`}` 
      && `/${data.page}/${data.id}`}`}`)}
     className={`cursor-pointer ${name !== "slider" ? "shadow-xl rounded-md" : "pb-5"}`}
    >
      <Notify />
      <p className={`${name !== "slider" && "hidden"} h-fit z-20 w-24 absolute -top-4 -right-2 p-1 rounded-sm text-sm text-center -rotate-90 text-white bg-red-600`}>
        {data.discount}
      </p>

      <div className="overflow-hidden relative h-72 mb-1 rounded-md">
        <img
          src={hover ? data.image2 : data.image1}
          alt={data.name}
          className={`w-full h-full rounded-md ${hover && "scale-105"} duration-300`}
        />

        <div className={`details-cards ${!hover && "md:-left-9"}`}>
          <div className="mb-2 group centering">
            <p className="group-hover:flex">مقایسه</p>
            <i className="group-hover:text-white group-hover:bg-black"> 
              <IoMdStats className="size-5"/>
            </i>
          </div>

          <div className="mb-2 group centering">
            <p className="group-hover:flex">مشاهده سریع</p>
            <i className="group-hover:text-white group-hover:bg-black"> 
              <IoIosSearch className="size-5"/>
            </i>
          </div>

          <div className="mb-2 group centering">
            <p className="group-hover:flex">علاقه‌مندی</p>
            <i
             onClick={addToFavoritesHandler} 
             className={`${haveFavorites ? "text-red-600" : "group-hover:text-white"} group-hover:bg-black bg-white icon-details-cards`}
            > 
              <IoMdHeart className="size-5"/>
            </i>
          </div>
        </div>

        <div className={`add-to-cart ${!hover && "md:-bottom-10"}`}>
          افزودن به سبد خرید
        </div>
      </div>

      <div className="text-white font-vazirRegular text-sm centering flex-col bg-cyan-800 rounded-md w-full p-2">
        <h1 className="text-lg font-vazirMediu mb-2">{data.name}</h1>
        <p className={`${name === "slider" && "line-through opacity-70"}`}>{data.price !== "ناموجود" ? data.price.toLocaleString() : data.price}</p>
        <p>{data.priceDiscount && data.priceDiscount.toLocaleString()}</p>
      </div>
    </div>
  );
};
export default Card;
