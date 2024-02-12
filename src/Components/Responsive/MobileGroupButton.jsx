import React from "react";

import { GrHomeRounded } from "react-icons/gr";
import { LuUser2 } from "react-icons/lu";
import { FiHeart } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const MobileGroupButton = ( { showMenu , setShowMenu } ) => {
  return (
    <div className="centering justify-between bg-header z-30 fixed right-0 left-0 bottom-2 w-[95%] rounded-2xl shadow-cards mx-auto py-6 px-8 xs:px-16 md:hidden">
      <IoMdMenu onClick={() => setShowMenu(true)} className={`${showMenu && "hidden"} size-6`}/>
      <IoClose onClick={() => setShowMenu(false)} className={`${!showMenu && "hidden"} size-6`}/>  

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
