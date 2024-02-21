import React from "react";
import { Checkbox } from "pretty-checkbox-react";
import "@djthoms/pretty-checkbox";
import { available } from "../../features/filter/filterSlice";
import { useDispatch } from "react-redux";

const Available = () => {
  const dispatch = useDispatch();

  return (
    <div className="filter-sections centering">
      <Checkbox
        onClick={() => dispatch(available())}
        color="success-o"
        shape="curve"
        animation="pulse"
      ></Checkbox>
      <h1 className="mr-2">نمایش کالاهای موجود</h1>
    </div>
  );
};

export default Available;
