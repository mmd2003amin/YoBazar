import React from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "../utils/ScrollToTop"; 
import Layout from "../Layout/Layout";
import MainPage from "../pages/MainPage";
import ManPage from "../pages/ManPage";
import WomanPage from "../pages/WomanPage";
import GlassesPage from "../pages/GlassesPage";
import WatchPage from "../pages/WatchPage";
import ShoePage from "../pages/ShoePage";
import BagPage from "../pages/BagPage";
import Details from "../pages/Details";
import Auth from "../pages/auth";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/Dashboard";
import Favorites from "../pages/Favorites";
import Cart from "../pages/Cart";

const App = () => {
  return (
    <div className="font-medium">
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="man" element={<ManPage />} />
          <Route path="woman" element={<WomanPage />} />
          <Route path="glasses" element={<GlassesPage />} />
          <Route path="watch" element={<WatchPage />} />/
          <Route path="shoe" element={<ShoePage />} />
          <Route path="bag" element={<BagPage />} />
          <Route path=":page/:id" element={<Details />} />
          <Route path="auth" element={<Auth />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>

      <ScrollToTop />
    </div>
  );
};

export default App;
