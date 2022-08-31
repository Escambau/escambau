import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./reset.css";
import "./global.css";
import App from "./App";
import { UserProvider } from "./contexts/UserContext";
import { ProductProvider } from "./contexts/ProductContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
