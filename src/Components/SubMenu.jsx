import React from "react";
import manImage from "../assets/ManSubMenu/image.png";
import womanImage from "../assets/ManSubMenu/image2.png";

const SubMenu = ({ showSubMenu, setShowSubMenu, data: { data, nameSub } }) => {
  return (
    <div
      onMouseEnter={() => setShowSubMenu(true)}
      onMouseLeave={() => setShowSubMenu(false)}
      className={`${
        showSubMenu ? "translate-y-0" : "translate-y-[-400px]"
      } fixed z-[4] top-[100px] bg-white shadow-md duration-500 h-64 w-full grid grid-cols-5 px-5`}
    >
      {data.map((list) => (
        <div key={list.id} className="centering flex-col">
          {nameSub !== "دسته‌ها" ? (
            <>
              <h1 className="mb-3 text-lg">{list.name}</h1>
              <ul className="centering flex-col">
                {list.items.map((item) => (
                  <li
                    key={item}
                    className="text-gray-800 hover:text-red-500 transition-all cursor-pointer text-sm mb-1.5"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <>
              <img
                className="size-40 rounded-full mb-2 cursor-pointer"
                src={list.image}
                alt={list.name}
              />
              <h1 className="mb-3 text-lg">{list.name}</h1>
            </>
          )}
        </div>
      ))}

      {nameSub === "مردانه" ? (
        <img src={manImage} alt="man" className="h-64 w-96 mr-40" />
      ) : (
        nameSub === "زنانه" && (
          <img src={womanImage} alt="man" className="h-64 w-96 mr-40" />
        )
      )}
    </div>
  );
};

export default SubMenu;
