import "./App.css";
import React, { useContext } from "react";
import HeaderUnlogged from "./components/HeaderUnlogged";
import TradeModal from "./components/TradeModal";
import { ProductContext } from "./contexts/ProductContext";
import GlobalStyle from "./styles/global";
import MoreInfo from "./components/MoreInfo";
import { ToastContainer } from "react-toastify";
import {LoginModal} from "./components/LoginModal";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import User from "./pages/User";
import Register from "./pages/Register";
import EditProduct from "./pages/EditProduct";
import { AddProduct } from "./components/AddProduct";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/profile" element={<User />} />
        <Route path="/register" element={<Register />} />
        <Route path="/edit-product" element={<EditProduct />} />
        <Route path="/moreinfo" element={<MoreInfo />} />
        <Route path="/add-product" element={<AddProduct />}/>
      </Routes>
    </div>
  );
}

export default App;
