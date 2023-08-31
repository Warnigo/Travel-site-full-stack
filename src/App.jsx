import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FrontLayout from "./components/layout/FrontLayout";
import HomeP from "./pages/user/HomeP";
import NotFoundP from "./pages/NotFoundP";
import Packages from "./pages/user/Packages";
import Contact from "./pages/user/Contact";
import Country from "./pages/user/Country";
import Offer from "./pages/user/offer";
import Payment from "./pages/user/payment";
import Connect from "./pages/user/Connect";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontLayout />}>
          <Route index element={<HomeP />} />
          <Route path="contact" element={<Contact />} />
          <Route path="packages" element={<Packages />} />
          <Route path="offer" element={<Offer />} />
          
          <Route path="country/:id/country-about" element={<Country />} />
          <Route path="connect" element={<Connect />} />
        </Route>
        <Route path="pay" element={<Payment />} />
        <Route path="*" element={<NotFoundP />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
