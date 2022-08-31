import React from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import ConfirmTradeModal from "./components/ConfirmTradeModal";
import HeaderUnlogged from "./components/HeaderUnlogged";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ConfirmTradeModal />
      <HeaderUnlogged />
    </div>
  );
}

export default App;
