import React from "react";
import { InfinitySpin } from "react-loader-spinner";
import logo from "../assets/logo.png";
const Loader = () => {
  return (
    <div className="centering w-full h-full fixed top-0 z-50 backdrop-blur-sm">
      <div className="w-8/12 md:w-4/12 bg-white shadow-cards rounded-xl p-4 h-6/12 centering flex-col">
        <img src={logo} alt="logo" className="w-32 mb-5" />
        <div className="mr-8">
          <InfinitySpin height="130" width="130" color="#dc2626" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
