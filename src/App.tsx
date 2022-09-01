import React from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import MoreInfo from "./components/MoreInfo";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <MoreInfo />
    </div>
  );
}

export default App;
