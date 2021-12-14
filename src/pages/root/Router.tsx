import { HomePage } from "pages/home";
import { OffersPage } from "pages/offers/OffersPage";
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

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
