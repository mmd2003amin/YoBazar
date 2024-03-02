import React from "react";
import { useSelector } from "react-redux";
import Card from "./MainPage/Card";

const Favorites = () => {
  const data = useSelector((state) => state.favorites.products);

  return (
    <div className="w-[98%] mx-auto mt-10">
      {data.length ? (
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      ) : (
        <div className="w-96 h-64 border-2 border-cyan-700 rounded-xl centering mx-auto mt-10 text-xl text-cyan-700">
          Empty
        </div>
      )}
    </div>
  );
};

export default Favorites;
