import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../features/data/dataSlice";
import Products from "./Products";

const ManPage = () => {
  const data = useSelector((state) => state.data.products.cardsMan);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => dispatch(fetchData()), 1000);
  }, []);

  return <Products data={data} />;
};

export default ManPage;
