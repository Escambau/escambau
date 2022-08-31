import React from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import MoreInfo from "./components/MoreInfo";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <GlobalStyle />
      <MoreInfo />
    </div>
  );
}

export default App;
