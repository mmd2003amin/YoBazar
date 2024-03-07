import React from "react";
import Card from "./Card";
import Loader from "../../Components/Loader";
import Filters from "../../Components/Filters";
import MobileFilters from "../../Components/Responsive/MobileFilters";
import { useSelector } from "react-redux";
import Notify from "../../utils/Notify";

const Products = ({ data }) => {
  const filter = useSelector((state) => state.filter);
  const filterHave = filter.haveProduct
    ? data.filter((item) => item.price !== "ناموجود")
    : data;

  const cloneData = filterHave && [...filterHave];
  const existing =
    filter.sortBy && cloneData.filter((item) => item.price !== "ناموجود");
  const nonExistence =
    filter.sortBy && cloneData.filter((item) => item.price === "ناموجود");
  const allData = filterHave && [...existing, ...nonExistence];

  const sortBy =
    filter.sortBy === "محبوب‌ترین"
      ? cloneData.sort((a, b) => (a.star > b.star ? 1 : -1)).reverse()
      : filter.sortBy === "پر بازدید‌ترین"
      ? cloneData.sort((a, b) => (a.view > b.view ? 1 : -1)).reverse()
      : filter.sortBy === "گران‌ترین"
      ? allData.sort((a, b) => (a.price > b.price ? 1 : -1)).reverse()
      : filter.sortBy === "ارزان‌ترین"
      ? allData
          .reverse()
          .sort((a, b) => (a.price > b.price ? 1 : -1))
          .reverse()
          .reverse()
      : cloneData;

  const products = filter.filterPrice
    ? sortBy.filter(
        (item) =>
          item.price < filter.filterPrice[1] &&
          item.price > filter.filterPrice[0]
      )
    : sortBy;

  return (
    <>
      <Notify />
      {!!data ? (
        <div className="mx-auto centering flex-col md:flex-row items-start mt-10 w-[98%]">
          <div className="w-full md:w-[30%] lg:w-1/5 ml-4 md:ml-8">
            <div className="hidden md:block">
              <Filters />
            </div>
            <MobileFilters />
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 w-full md:w-[70%] lg:w-4/5">
            {products.map((item) => (
              <Card key={item.id} data={item} name={item.page} />
            ))}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Products;
