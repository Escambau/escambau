import React, { useContext } from "react";
import "./App.css";

import HeaderUnlogged from "./components/HeaderUnlogged";
import TradeModal from "./components/TradeModal";
import { ProductContext } from "./contexts/ProductContext";
import GlobalStyle from "./styles/global";

function App() {
  const {setIsTradeModal} = useContext(ProductContext)
  return (
    <div className="App">
      <TradeModal />
      <GlobalStyle />
      <HeaderUnlogged />
      <button onClick={() => setIsTradeModal(true)}>tradeModal</button>
    </div>
  );
}

export default App;
