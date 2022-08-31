import React from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import User from "./pages/User";

function App() {
  return <div className="App">
    <ToastContainer />
    <User />
  </div>;
}

export default App;
