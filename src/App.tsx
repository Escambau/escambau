import "./App.css";
import React, { useContext } from "react";
import HeaderUnlogged from "./components/HeaderUnlogged";
import TradeModal from "./components/TradeModal";
import { ProductContext } from "./contexts/ProductContext";
import GlobalStyle from "./styles/global";
import MoreInfo from "./components/MoreInfo";
import { ToastContainer } from "react-toastify";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ToastContainer />

      <Routes>
        <Route path="/moreinfo" element={<MoreInfo />} />
      </Routes>

      <Link to="/moreinfo">MORE INFO</Link>
    </div>
  );
}

export default App;
