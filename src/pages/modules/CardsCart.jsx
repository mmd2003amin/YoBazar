import React from "react";
import { useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "../../features/cart/cartSlice";

import { FaRegTrashAlt, FaPlus, FaMinus } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";

const CardsCart = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <div className="grid gap-5 grid-cols-2 lg:grid-cols-4 items-center mb-4 border rounded-lg p-2 w-full relative mr-2">
      <IoIosCloseCircleOutline
        onClick={() => dispatch(removeItem(data))}
        className="absolute top-2 left-2 size-7 text-gray-300 cursor-pointer"
      />

      <img src={data.image1} alt="image" className="size-28 rounded-md" />

      <p className="mx-auto text-slate-900 font-vazirBold">{data.name}</p>

      <div className="centering justify-between border p-2 rounded-lg shadow-lg text-cyan-700">
        <FaPlus
          onClick={() => dispatch(increase(data))}
          className="size-5 ml-8 cursor-pointer"
        />
        <p className="mb-2 text-lg">{data.qty}</p>
        {data.qty === 1 ? (
          <FaRegTrashAlt
            onClick={() => dispatch(removeItem(data))}
            className="size-5 mr-8 cursor-pointer"
          />
        ) : (
          <FaMinus
            onClick={() => dispatch(decrease(data))}
            className="size-5 mr-8 cursor-pointer"
          />
        )}
      </div>

      <span className="w-20 mx-auto text-gray-700" dir="ltr">
        {data.price === "ناموجود"
          ? "ناموجود"
          : (data.price * data.qty).toLocaleString()}
      </span>
    </div>
  );
};

export default CardsCart;
