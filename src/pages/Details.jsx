import React from "react";
import { useParams } from "react-router-dom";
import data from "../../public/data.json";
import SliderDetails from "./modules/SliderDetails";
import About from "./modules/About";
import Card from "./modules/Card";

const Details = () => {
  const { id } = useParams();
    
  const allData = [
    ...data.amazing,
    ...data.cardsMan,
    ...data.cardsWoman,
    ...data.bag,
    ...data.shoe,
    ...data.glasses,
    ...data.watch,
  ];
console.log();
  const find = data && allData.find((i) => i.id === +id);
  const relatedProducts =
    data &&
    allData.filter(
      (item) => item.name.includes(find.name.split(" ")[0]) && item.id !== +id
    );

    return (
    <>
      <div className="mt-10">
        <div className="mt-120 centering flex-col md:flex-row items-start md:items-center w-11/12 mx-auto">
          <SliderDetails
            images={[find.image1, find.image2, find.image3, find.image4]}
          />
          <About data={find} />
        </div>

        <div className="hed-cads-main mt-16">محصولات مرتبط</div>

        <div className="centering grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-[98%] mx-auto mt-10">
          {relatedProducts.slice(0, 4).map((item) => (
            <Card key={item.id} data={item} name="detail" />
          ))}
        </div>
      </div>
    </>
  );
};

export default Details;
