import React, { useState } from "react";
import { CiFilter } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import Filters from "../Filters";
import { useNamePage } from "../../hooks/useNamePage";

const MobileFilters = () => {
  const [showMenu, setShowMenu] = useState(false);
  const namePage = useNamePage();

  return (
    <div className="md:hidden w-full">
      <div
        onClick={() => setShowMenu(true)}
        className="md:hidden border bg-red-500 hover:bg-red-600 transition-all text-white cursor-pointer border-solid border-gray-300 rounded-lg centering p-2 mb-5 "
      >
        <CiFilter className="size-6 ml-1" />
        <p>فیلتر کردن</p>
      </div>

      <div
        className={`w-full h-full bg-white fixed top-0 duration-300 ${
          showMenu ? "opacity-100 z-10" : "opacity-0 -z-[30]"
        }`}
      >
        <div className="w-11/12 mx-auto">
          <div className="centering justify-between p-3 mb-2">
            <p className="font-vazirBold">{namePage}</p>
            <IoMdClose
              onClick={() => setShowMenu(false)}
              className="size-6 cursor-pointer"
            />
          </div>
          <Filters />
        </div>
      </div>
    </div>
  );
};

export default MobileFilters;
