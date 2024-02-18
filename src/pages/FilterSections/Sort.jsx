import React, { useState } from "react";
import { TbFilterSearch } from "react-icons/tb";
import buttonsFilter from "../../constant/buttonsFilter";
import { sort } from "../../features/filter/filterSlice";
import { useDispatch } from "react-redux";

const Sort = () => {
  const [selected, setSelected] = useState(2);
  const dispatch = useDispatch();

  const selectHandler = (item) => {
    setSelected(item.id);
    dispatch(sort(item.name));
  };

  return (
    <div className="filter-sections">
      <div className="centering justify-start">
        <TbFilterSearch className="size-5 ml-2" />
        <h1>مرتب‌سازی بر اساس : </h1>
      </div>

      <div className="grid grid-cols-2 mt-5 gap-2 filter-buttons">
        {buttonsFilter.map((item) => (
          <button
            key={item.id}
            onClick={() => selectHandler(item)}
            className={`hover:shadow-lg transition-all border border-solid border-red-500 rounded-md p-1 centering ${
              selected === item.id ? "bg-red-500 text-white" : "text-red-600"
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sort;
