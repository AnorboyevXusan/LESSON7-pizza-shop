import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ProductsContextProvider from "./context/ProductsContext.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductsContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ProductsContextProvider>
);
