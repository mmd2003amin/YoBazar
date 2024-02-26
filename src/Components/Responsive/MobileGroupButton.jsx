import React from "react";

import { GrHomeRounded } from "react-icons/gr";
import { LuLogOut, LuUser2 } from "react-icons/lu";
import { FiHeart } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

const MobileGroupButton = ( { showMenu , setShowMenu } ) => {
  const user = localStorage.getItem("user");
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="centering justify-between bg-header z-30 fixed right-0 left-0 bottom-2 w-[95%] rounded-2xl shadow-cards mx-auto py-6 px-8 xs:px-16 md:hidden">
      <IoMdMenu onClick={() => setShowMenu(true)} className={`${showMenu && "hidden"} size-6`}/>
      <IoClose onClick={() => setShowMenu(false)} className={`${!showMenu && "hidden"} size-6`}/>  

      <LuLogOut onClick={logoutHandler} className={`${!user && "hidden"} size-6`} />

      <Link to="auth" className={user && "hidden"}>
        <LuUser2 className="size-6" />
      </Link>
      <Link to="dashboard" className={!user && "hidden"}>
        <GrHomeRounded className="size-6" />
      </Link>

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
