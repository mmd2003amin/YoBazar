import React, { useState, useEffect } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { CiFilter } from "react-icons/ci";
import { filterPrice } from "../../features/filter/filterSlice";
import { useDispatch } from "react-redux";

const FilterPrice = () => {
  const [range, setRange] = useState([0, 100]);
  const [priceLow, setPriceLow] = useState(-52400);
  const [prevPriceLow, setPrevPriceLow] = useState([]);
  const [priceUp, setPriceUp] = useState(1221600);
  const [prevPriceUp, setPrevPriceUp] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    setPrevPriceLow([...prevPriceLow, range[0]]);
    const prevState = prevPriceLow[prevPriceLow.length - 1];
    setPriceLow((prev) => (prevState > range[0] ? prev - 63700 : prev + 63700));
  }, [range[0]]);

  useEffect(() => {
    setPrevPriceUp([...prevPriceUp, range[1]]);
    const prevState = prevPriceUp[prevPriceUp.length - 1];
    setPriceUp((prev) => (prevState > range[1] ? prev - 63700 : prev + 63700));
  }, [range[1]]);

  return (
    <div className="filter-sections">
      <h1 className="mb-3">فیلتر براساس قیمت :</h1>
      <hr />
      <RangeSlider
        value={range}
        step={4}
        onInput={setRange}
        className="h-3 my-7 rounded-md bg-[#353644] range-slide shadow-lg"
      />

      <div className="centering justify-between mt-3 price-filter">
        <div className={`${priceUp < 900000 && priceUp > 450000 ? "bg-orange-500" : priceUp < 450000 ? "bg-green-500" : "bg-red-500"}`}>
          {priceUp.toLocaleString()}
        </div>
        <div className={`${priceLow < 900000 && priceLow > 450000 ? "bg-orange-500" : priceLow < 450000 ? "bg-green-500" : "bg-red-500"}`}>
          {priceLow.toLocaleString()}
        </div>
      </div>

      <div
        onClick={() => dispatch(filterPrice([priceLow, priceUp]))}
        className="shadow-lg text-white bg-red-500 hover:bg-red-600 transition-all cursor-pointer rounded-md mt-8 px-3 py-2 w-11/12 centering mx-auto"
      >
        <CiFilter className="size-6" />
        <h1>صافی</h1>
      </div>
    </div>
  );
};

export default FilterPrice;
