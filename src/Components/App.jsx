import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import MainPage from "../pages/MainPage";
import ManPage from "../pages/ManPage";
import WomanPage from "../pages/WomanPage";
import GlassesPage from "../pages/GlassesPage";
import WatchPage from "../pages/WatchPage";
import ShoePage from "../pages/ShoePage";
import BagPage from "../pages/BagPage";
import Details from "../pages/Details";
const App = () => {

  return (
    <div className="font-medium">
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="man" element={<ManPage />} />
          <Route path="man/:id" element={<Details />} />
          <Route path="woman" element={<WomanPage />} />
          <Route path="woman/:id" element={<Details />} />
          <Route path="glasses" element={<GlassesPage />} />
          <Route path="glasses/:id" element={<Details />} />
          <Route path="watch" element={<WatchPage />} />/
          <Route path="watch/:id" element={<Details />} />
          <Route path="shoe" element={<ShoePage />} />
          <Route path="shoe/:id" element={<Details />} />
          <Route path="bag" element={<BagPage />} />
          <Route path={`bag/:id`} element={<Details />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
