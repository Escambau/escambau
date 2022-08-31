import React from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import HeaderUnlogged from "./components/HeaderUnlogged";
import RegisterForm from "./components/RegisterForm";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      {/* <HeaderUnlogged /> */}
      <RegisterForm />
    </div>
  );
}

export default App;
