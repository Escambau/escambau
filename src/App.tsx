import React from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import TradeModal from "./components/TradeModal";
import User from "./pages/User";

function App() {
  return <div className="App">
    <ToastContainer />
    <TradeModal />
    <User />
  </div>;
}

export default App;
