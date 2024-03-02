import React, { useEffect, useState } from "react";
import authHandler from "../utils/authorization";

import Account from "./Dashboard/Account";
import dashboardData from "../constant/dashboardData";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Favorites from "./Favorites";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const favorites = useSelector(state => state.favorites.products);
  const [data, setData] = useState({ name: "حساب کاربری", data: user });
  
  useEffect(() => authHandler, []);
  const navigate = useNavigate();

  const dataHandler = (e) => {
    const name = e.target.dataset.name;

    {name === "خروج" && (navigate("/"),localStorage.clear())}
    {name === "حساب کاربری" && setData({ name: name, data: user })}
    {name === "علاقه‌مندی" && setData({ name: name, data: favorites })}
    {name === "سبدخرید" && setData({ name: name, data: "" })}
  };

  return (
    <div className="centering justify-between items-start flex-col sm:flex-row min-h-[400px]">
      <div className="dashboard sm:ml-6 p-5 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-1 gap-2 mx-auto">
        {dashboardData.map((item) => (
          <div
            key={item.id}
            className={`${data.name === item.name ? "bg-black text-white" : "bg-white"}`}
            data-name={item.name}
            onClick={dataHandler}
          >
            {item.icon}
            <p data-name={item.name}>{item.name}</p>
          </div>
        ))}
      </div>

      <div className="w-full">
        {data.name === "حساب کاربری" && <Account data={data.data} />}
        {data.name === "علاقه‌مندی" && <Favorites data={data.data} />}
      </div>
    </div>
  );
};

export default Dashboard;