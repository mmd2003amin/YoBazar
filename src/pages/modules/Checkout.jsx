import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../features/cart/cartSlice";

import { IoMdClose } from "react-icons/io";
import { notify } from "../../utils/Notify";

const Checkout = ({ setShowModal }) => {
  const data = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const checkoutHandler = () => {
    setShowModal(false);
    if (data.products.length) {
      dispatch(clearCart());
      notify("success", "تسویه حساب با موفقیت انجام شد!");
    } else {
      notify("error", "سبد خرید شما خالی است!");
    }
  };

  return (
    <div className="centering w-full h-full bg-header fixed z-20 top-0 right-0">
      <div className="h-fit w-11/12 xs:w-2/3 md:w-[40%] rounded-lg shadow-lg bg-white p-5">
        <IoMdClose
          onClick={() => setShowModal(false)}
          className="bg-red-500 shadow-md rounded-lg text-white p-2 size-10 absolute top-8 right-8 cursor-pointer"
        />

        <div className="font-vazirBold">
          <div className="flex justify-between mx-5 text-slate-900 my-2">
            <p className="ml-1.5">جمع سبد خرید:</p>
            <span>{data.totalPrice.toLocaleString()}</span>
          </div>

          <div className="flex justify-between mx-5 mt-4 text-sky-950">
            <p className="ml-1.5">تعداد:</p>
            <span>{data.totalQuantity}</span>
          </div>
        </div>

        <div className="w-full centering">
          <button
            onClick={checkoutHandler}
            className="mt-16 w-10/12 lg:w-8/12 p-3 bg-white-600 text-green-600 hover:text-white border border-green-600 hover:bg-green-600 transition-all rounded-lg"
          >
            تایید و تکمیل سفارش
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
