import React from "react";
import empty from "../../assets/empty.svg";

const CartEmpty = () => {
  return (
    <div className="centering flex-col">
      <div className="centering flex-col">
        <img src={empty} alt="empty" />
        <button className="my-5 text-slate-900 font-vazirBold">
          سبد خرید شما خالی است!
        </button>
        <p className="text-sm text-gray-500 font-vazirRegular">
          می‌توانید برای مشاهده محصولات بیشتر به صفحات زیر بروید:
        </p>
      </div>
    </div>
  );
};

export default CartEmpty;
