import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../features/data/dataSlice";
import Products from "./modules/Products";

const WatchPage = () => {
  const data = useSelector((state) => state.data.products.watch);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => dispatch(fetchData()), 1000);
  }, []);

  return <Products data={data} />;
};

export default WatchPage;
