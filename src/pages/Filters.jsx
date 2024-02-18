import React from "react";
import Available from "./FilterSections/Available";
import FilterPrice from "./FilterSections/FilterPrice";
import Sort from "./FilterSections/Sort";

const Filters = () => {
  return (
    <div className="text-sm">
      <Available />
      <FilterPrice />
      <Sort />
    </div>
  );
};

export default Filters;
