import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainerWithProps } from "./components";
import "./index.css";
import { NewPortfolioNav } from "./pages";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <NewPortfolioNav />
      <ToastContainerWithProps />
    </BrowserRouter>
  </React.StrictMode>
);
