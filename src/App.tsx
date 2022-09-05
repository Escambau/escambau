import "./App.css";
import React, { useContext } from "react";
import GlobalStyle from "./styles/global";
import MoreInfo from "./components/MoreInfo";
import { ToastContainer } from "react-toastify";
import { Routes, Route, Link } from "react-router-dom";
import { AddProduct } from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ToastContainer />
      <Routes>
        <Route path="/moreinfo" element={<MoreInfo />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/editproduct" element={<EditProduct />} />
      </Routes>
    </div>
  );
}

export default App;
