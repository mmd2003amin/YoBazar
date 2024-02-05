import React from "react";
import Layout from "../Layout/Layout";
import MainPage from "../pages/MainPage";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="font-medium">
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
