import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../features/data/dataSlice";
import CardsSearch from "./CardsSearch";
import logo from "../assets/logo.png";

const Search = ({ setShowSearch }) => {
  const [value, setValue] = useState("");
  const data = useSelector((state) => state.data.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const allData = data.amazing && [
    ...data.amazing,
    ...data.cardsMan,
    ...data.cardsWoman,
    ...data.bag,
    ...data.shoe,
    ...data.glasses,
    ...data.watch,
  ];

  const search =
    data.amazing &&
    allData.filter((item) => item.name.trim().includes(value.trim()));

  return (
    <div>
      <div className="w-11/12 mx-auto centering justify-between p-3 border-b border-solid border-cyan-600">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="جستجو..."
          className="border-none outline-none font-vazirRegular bg-transparent w-32 xs:w-52 lg:w-72"
        />
        <IoIosSearch className="size-5" />
      </div>

      <div className={`centering flex-col rounded-lg mt-6`}>
        {value && search ? (
          search.slice(0,10).map((item) => (
            <CardsSearch data={item} setShowSearch={setShowSearch} />
          ))
        ) : (
          <div className="mt-10 md:mt-24 centering flex-col">
            <img src={logo} alt="image" className="w-36 md:w-48 mb-5 md:mb-10"/>
            <button
             onClick={(e) => {setShowSearch(false),e.stopPropagation()}}
             className="border border-red-600 rounded-md hover:bg-red-600 text-red-600 hover:text-white transition-all w-fit p-2 cursor-pointer">
              بازگشت
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
