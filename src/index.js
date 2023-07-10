import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { YearProvider } from "./context/YearContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <YearProvider>
      <App />
    </YearProvider>
  </React.StrictMode>
);
