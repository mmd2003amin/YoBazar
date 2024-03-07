import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import CardsCart from "./modules/CardsCart";
import CartEmpty from "./modules/CartEmpty";
import cartEmptyData from "../constant/cartEmptyData";
import { Link } from "react-router-dom";
import Notify, { notify } from "../utils/Notify";
import Checkout from "./modules/Checkout";

const Cart = () => {
  const [showModal, setShowModal] = useState(false);
  const data = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const checkoutHandler = () => {
    const signIn = localStorage.getItem("user");
    if(signIn) {
      setShowModal(true);
    } else {
      notify("error" , "لطفا ابتدا وارد حساب خود شوید!")
    }
  };

  return (
    <>
      <Notify />
      <div className="mt-10 flex flex-col md:flex-row justify-between items-start mx-5 md:mx-8">
        <div className="border rounded-lg p-3 w-full xs:w-8/12 md:w-[45%] lg:w-[28%] h-48 relative mx-auto">
          <div className="font-vazirBold">
            <div className="flex justify-between mx-5 text-slate-900 my-2">
              <p className="ml-1.5">قیمت کل :</p>
              <span>{data.totalPrice.toLocaleString()}</span>
            </div>

            <div className="flex justify-between mx-5 mt-4 text-sky-950">
              <p className="ml-1.5">تعداد:</p>
              <span>{data.totalQuantity}</span>
            </div>
          </div>

          <div className="cart-buttons">
            <button className="right-2" onClick={checkoutHandler}>تسویه حساب</button>
            <button className="left-2" onClick={() => dispatch(clearCart())}>
              پاک‌کردن همه
            </button>
          </div>
        </div>

        <div className="centering mx-auto mt-5 md:mt-0 flex-col w-full md:w-[70%]">
          {data.products.length ? (
            data.products.map((product) => (
              <CardsCart key={product.id} data={product} />
            ))
          ) : (
            <CartEmpty />
          )}
        </div>
      </div>

      <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 1150:grid-cols-4 mt-16 mx-3">
        {!data.products.length &&
          cartEmptyData.map((item) => (
            <Link to={item.path} key={item.id}>
              <img
                src={item.image}
                alt="image"
                className="w-full h-60 rounded-md"
              />
            </Link>
          ))}
      </div>

      {!!showModal && <Checkout setShowModal={setShowModal}/>}
    </>
  );
};

export default Cart;
