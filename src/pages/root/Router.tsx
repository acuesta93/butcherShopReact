import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const HomePage = React.lazy(() => import(/* home.page.module */ 'pages/home/HomePage'));
const OffersPage = React.lazy(() => import(/* offers.page.module */'pages/offers/OffersPage'));

export const Router = React.memo(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/offers" element={<OffersPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
});
