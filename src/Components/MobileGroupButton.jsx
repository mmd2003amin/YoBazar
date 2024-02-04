import React from "react";

import { GrHomeRounded } from "react-icons/gr";
import { LuUser2 } from "react-icons/lu";
import { FiHeart } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { IoMdMenu } from "react-icons/io";

const MobileGroupButton = () => {
  return (
    <div className="centering justify-between bg-white fixed right-0 left-0 bottom-0 py-4 px-8 xs:px-16 md:hidden">
      <IoMdMenu className="size-6"/>

      <GrHomeRounded className="size-6" />

      <LuUser2 className="size-6" />

      <div className="relative">
        <FiHeart className="size-6" />
        <span className="quantity bottom-3 right-3">0</span>
      </div>

      <div className="relative">
        <BsCart3 className="size-6" />
        <span className="quantity bottom-3 right-3 ">0</span>
      </div>
    </div>
  );
};

export default MobileGroupButton;
