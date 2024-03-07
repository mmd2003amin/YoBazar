import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../features/data/dataSlice";
import Card from "./Card";
import Notify from "../../utils/Notify";

const Cards = () => {
  const data = useSelector((state) => state.data.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const manData = data.cardsMan && data.cardsMan.slice(0, 2);
  const womanData = data.cardsMan && data.cardsWoman.slice(5, 7);
  const bag = data.cardsMan && data.bag.slice(2, 4);
  const shoe = data.cardsMan && data.shoe.slice(8, 10);

  const allCards = data.cardsMan && [...manData, ...womanData, ...bag, ...shoe];

  return (
    <>
    <Notify />
      <div className="hed-cads-main">جدید ترین محصولات جهان مد</div>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-11/12 md:w-[98%] mx-auto gap-5 mt-5">
        {data.cardsMan &&
          allCards.map((item) => (
            <Card key={item.id} data={item} name="cards" />
          ))}
      </div>
    </>
  );
};

export default Cards;
