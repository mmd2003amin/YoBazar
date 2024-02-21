import React from "react";
import shorten from "../helper/shorten";
import { Link } from "react-router-dom";

const CardsSearch = ({ data , setShowSearch }) => {
  return (
    <Link
      onClick={(e) => {setShowSearch(false) , e.stopPropagation()}}
      className="hover:shadow-md transition-all text-sm centering justify-between mb-2 p-2 cursor-pointer w-11/12 border border-solid border-gray-300 rounded-md"
      to={`${data.page}/${data.id}`}
    >
      <img src={data.image1} alt="image" className="h-20 w-16 rounded-md" />

      <p>{shorten(data.name)}</p>

      <p className="text-cyan-700">
        {data.price !== "ناموجود" ? data.price.toLocaleString() : data.price}
      </p>
    </Link>
  );
};

export default CardsSearch;
