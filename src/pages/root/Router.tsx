import Explore from "pages/explore/Explore";
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const HomePage = React.lazy(() => import(/* home.page.module */ 'pages/home/HomePage'));
const OffersPage = React.lazy(() => import(/* offers.page.module */'pages/offers/OffersPage'));
const TopSales = React.lazy(() => import (/*topsales.page.module */'pages/top-sales/TopSales'));
const Login = React.lazy(() => import (/*login.page.module*/'pages/login/Login'));

export const Router = React.memo(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/offers" element={<OffersPage />}></Route>
        <Route path="/top-sales" element={<TopSales/>}></Route>
        <Route path="/explore" element={<Explore/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  );
});
