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
import { IoIosSearch , IoIosArrowUp } from "react-icons/io";
import { LuUser2 } from "react-icons/lu";
import { FiHeart } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [data, setData] = useState({
    data: PagesSubMenu,
    nameSub: "صفحات",
  });

  const showSubMenuHandler = (e , id) => {
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

  return (
    <>
      <div onClick={() => setShowSearch(false)} className="sticky top-0 centering justify-between bg-header p-2 md:px-6 h-16 md:flex-row-reverse z-10">
        <div className="hidden md:centering">
          <LuUser2 className="size-6 mr-4" onClick={() => setShow(true)} />
          <div className="relative">
            <FiHeart className="size-6 mr-4" />
            <span className="quantity">0</span>
          </div>
          <div className="relative">
            <BsCart3 className="size-6 mr-4" />
            <span className="quantity">0</span>
          </div>
        </div>

        <img
          src={logo}
          alt="logo"
          className="w-24 xs:w-32 md:absolute left-0 right-0 md:mx-auto"
        />

        <div onClick={showSearchHandler} className=" cursor-pointer relative centering justify-between bg-gray-100 p-2 w-1/3 rounded-lg xs:rounded-xl">
          <div className="font-vazirRegular text-sm bg-transparent w-32 xs:w-52 lg:w-72 text-gray-400">
            جستجو ...
          </div>
          <IoIosSearch className="size-5" />
        </div>

        <div 
         onClick={showSearchHandler} 
         className={`${showSearch ? "opacity-100 top-0 md:top-3" : "hidden"} z-20 absolute overflow-y-auto h-[22rem] md:h-[27rem] p-2 shadow-lg right-0 md:right-4 duration-300 w-full md:w-1/3 md:rounded-xl bg-white`}>
            <Search setShowSearch={setShowSearch}/>
        </div>
      </div>

      <div className="hidden md:centering w-full h-8 py-5 sticky top-16 shadow-md bg-header z-[5]">
        <ul className="list-menu centering">
          {ItemsMenu.map((item) => (
            <li key={item.id}>
              <span
                className="py-5"
                onMouseEnter={(e) => showSubMenuHandler(e ,item.id)}
                onMouseLeave={() => setShowSubMenu(false)}
              >
                {item.name}
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
      <MobileMenu showMenu={showMenu} />
      <SubMenu showSubMenu={showSubMenu} setShowSubMenu={setShowSubMenu} data={data} />
      <div 
       onClick={() => setShowSearch(false)}
       className={`${showSearch ? "opacity-100 top-[60px] md:top-[105px] z-[6]" : "opacity-0 -z-10"} duration-150 fixed w-full h-full bg-header-dark`}
      ></div>
    </>
  );
};

export default Header;
