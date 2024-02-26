import React, { useEffect, useState } from "react";
import authHandler from "../utils/authorization";

import Account from "./Dashboard/Account";
import dashboardData from "../constant/dashboardData";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [data, setData] = useState({ name: "حساب کاربری", data: user });
  useEffect(() => authHandler, []);
  const navigate = useNavigate();

  const dataHandler = (e) => {
    const name = e.target.dataset.name;

    {name === "خروج" && (navigate("/"),localStorage.clear())}
    {name === "حساب کاربری" && setData({ name: name, data: user })}
    {name === "علاقه‌مندی" && setData({ name: name, data: "" })}
    {name === "سبدخرید" && setData({ name: name, data: "" })}
  };

  return (
    <div className="centering justify-between flex-col sm:flex-row">
      <div className="dashboard p-5 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-1 gap-2">
        {dashboardData.map((item) => (
          <div
            key={item.id}
            className={`${data.name === item.name && "bg-black text-white"}`}
            data-name={item.name}
            onClick={dataHandler}
          >
            {item.icon}
            <p data-name={item.name}>{item.name}</p>
          </div>
        ))}
      </div>

      <div className="w-full">
        {data && data.name === "حساب کاربری" && <Account data={data.data} />}
      </div>
    </div>
  );
};

export default Dashboard;