import React from "react";
import ReactDOM from "react-dom/client";
import "modern-normalize";
import "./index.css";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
