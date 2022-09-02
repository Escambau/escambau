import React, { useContext } from "react";
import "./App.css";

import HeaderUnlogged from "./components/HeaderUnlogged";
import TradeModal from "./components/TradeModal";
import { ProductContext } from "./contexts/ProductContext";
import GlobalStyle from "./styles/global";
import MoreInfo from "./components/MoreInfo";
import { ToastContainer } from "react-toastify";
import {LoginModal} from "./components/LoginModal";

function App() {
  const {setIsTradeModal} = useContext(ProductContext)
  return (
    <div className="App">
      <GlobalStyle />
      <ToastContainer />
      <LoginModal/>
    </div>
  );
}

export default App;
