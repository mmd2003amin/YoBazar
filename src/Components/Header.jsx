import React, { useState } from "react";
import MobileGroupButton from "./Responsive/MobileGroupButton";
import MobileMenu from "./Responsive/MobileMenu";
import SubMenu from "./SubMenu";
import Search from "./Search";

//Data
import {
  PagesSubMenu,
  StoreSubMenu,
  CategoriesSubMenu,
  ManSubMenu,
  WomanSubMenu,
} from "../constant/SubMenuData";
import ItemsMenu from "../constant/ItemsMenu";

//Icons
import logo from "../assets/logo.png";
import { IoIosSearch, IoIosArrowUp } from "react-icons/io";
import { LuUser2 } from "react-icons/lu";
import { FiHeart, FiLogOut } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { GoHome } from "react-icons/go";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [data, setData] = useState({
    data: PagesSubMenu,
    nameSub: "صفحات",
  });

  const showSubMenuHandler = (e, id) => {
    const name = e.target.innerText;

    name === "صفحات" && setData({ data: PagesSubMenu, nameSub: "صفحات" });
    name === "فروشگاه" && setData({ data: StoreSubMenu, nameSub: "فروشگاه" });
    name === "دسته‌ها" && setData({ data: CategoriesSubMenu, nameSub: "دسته‌ها" });
    name === "مردانه" && setData({ data: ManSubMenu, nameSub: "مردانه" });
    name === "زنانه" && setData({ data: WomanSubMenu, nameSub: "زنانه" });

    setShowSubMenu(id);
  };

  const showSearchHandler = (e) => {
    e.stopPropagation();
    setShowSearch(true);
  };

  const user = localStorage.getItem("user");
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <div
        onClick={() => setShowSearch(false)}
        className="sticky top-0 centering justify-between bg-header p-2 md:px-6 h-16 md:flex-row-reverse z-10"
      >
        <div className="hidden md:centering">
          <FiLogOut
           onClick={logoutHandler} 
           className={`${user ? "block" : "hidden"} button-header hover:text-red-600`}/>

          <Link to="dashboard" className={!user && "hidden"}>
            <GoHome title="خانه" className="button-header hover:text-green-600"/>
          </Link>

          <Link to="auth" className={user && "hidden"}>
            <LuUser2 className="button-header hover:text-green-600" title="ورود | ثبت‌نام"/>
          </Link>

          <div className="relative group">
            <FiHeart className="button-header group-hover:text-red-600" />
            <span className="quantity group-hover:bg-red-600">0</span>
          </div>
          <div className="relative group">
            <BsCart3 className="button-header group-hover:text-cyan-700" />
            <span className="quantity group-hover:bg-cyan-700">0</span>
          </div>
        </div>

        <Link to="/" className="md:mb-8">
          <img
            src={logo}
            alt="logo"
            className="w-24 xs:w-32 md:absolute left-0 right-0 md:mx-auto"
          />
        </Link>

        <div
          onClick={showSearchHandler}
          className=" cursor-pointer relative centering justify-between bg-gray-100 p-2 w-6/12 md:w-1/3 rounded-lg xs:rounded-xl"
        >
          <div className="font-vazirRegular text-sm bg-transparent xs:w-52 lg:w-72 md:py-1 text-gray-400">
            جستجو ...
          </div>
          <IoIosSearch className="size-5" />
        </div>

        <div
          onClick={showSearchHandler}
          className={`${
            showSearch ? "opacity-100 top-0 md:top-2" : "hidden"
          } z-20 absolute overflow-y-auto h-[22rem] md:h-[27rem] p-2 shadow-lg right-0 md:right-4 duration-300 w-full md:w-1/3 md:rounded-xl bg-white`}
        >
          <Search setShowSearch={setShowSearch} />
        </div>
      </div>

      <div className="hidden md:centering w-full h-8 py-5 sticky top-16 shadow-md bg-header z-[5]">
        <ul className="list-menu centering">
          {ItemsMenu.map((item) => (
            <li key={item.id}>
              <span
                className="py-5"
                onMouseEnter={(e) => showSubMenuHandler(e, item.id)}
                onMouseLeave={() => setShowSubMenu(false)}
              >
                {item.name[0]}
              </span>
              <IoIosArrowUp
                className={`${
                  showSubMenu === item.id && " -rotate-180"
                } duration-100 size-3 mr-1`}
              />
            </li>
          ))}
          <li>وبلاگ</li>
          <li>تماس</li>
        </ul>
      </div>

      <MobileGroupButton showMenu={showMenu} setShowMenu={setShowMenu} />
      <MobileMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      <SubMenu
        showSubMenu={showSubMenu}
        setShowSubMenu={setShowSubMenu}
        data={data}
      />
      <div
        onClick={() => setShowSearch(false)}
        className={`${
          showSearch
            ? "opacity-100 top-[60px] md:top-[105px] z-[6]"
            : "opacity-0 -z-10"
        } duration-150 fixed w-full h-full bg-header-dark`}
      ></div>
    </>
  );
};

export default Header;
