import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";

import "bootstrap/dist/css/bootstrap.min.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.css";
import "./i18next.js"
// import { Suspense }  "react";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={(<div>Loading...</div>)}>
      <App />
    </Suspense>
  </React.StrictMode>
);
