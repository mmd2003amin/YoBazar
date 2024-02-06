import React from "react";
import pagesSectionData from "../../constant/pagesSectionData";

const Pages = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-10 justify-center w-4/5 md:w-2/3 mx-auto mt-12">
      {pagesSectionData.map((item) => (
        <div
          key={item.id}
          className="centering flex-col hover:scale-110 transition-all hover:text-blue-800 cursor-pointer"
        >
          <span className="text-4xl md:text-[3.5rem] mb-4">{item.icon}</span>
          <h1 className="text-sm">{item.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Pages;
