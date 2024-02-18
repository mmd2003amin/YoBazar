import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../features/data/dataSlice";
import Products from "./Products";

const ShoePage = () => {
  const data = useSelector((state) => state.data.products.shoe);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => dispatch(fetchData()), 1000);
  }, []);

  return <Products data={data} />;
};

export default ShoePage;