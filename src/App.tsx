import "./App.css";
import React, { useContext } from "react";
import HeaderUnlogged from "./components/HeaderUnlogged";
import TradeModal from "./components/TradeModal";
import { ProductContext } from "./contexts/ProductContext";
import GlobalStyle from "./styles/global";
import MoreInfo from "./components/MoreInfo";
import { ToastContainer } from "react-toastify";

function App() {
  const {setIsTradeModal} = useContext(ProductContext)
  return (
    <div className="App">
      <TradeModal />
      <GlobalStyle />

      <HeaderUnlogged />
      <button onClick={() => setIsTradeModal(true)}>tradeModal</button>
      <ToastContainer />
      <MoreInfo />
    </div>
  );
}

export default App;
