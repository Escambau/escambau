import React from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import MoreInfo from "./components/MoreInfo";
import HeaderUnlogged from "./components/HeaderUnlogged";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <HeaderUnlogged />
      <MoreInfo />
      <GlobalStyle />
    </div>
  );
}

export default App;
