// import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./Components/App";
import { FiltersProvider } from "./Context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FiltersProvider>
    {/* <React.StrictMode> */}
      <App />
    {/* </React.StrictMode> */}
  </FiltersProvider>
);
