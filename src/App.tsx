import React from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import RegisterForm from "./components/RegisterForm";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <RegisterForm />
    </div>
  );
}

export default App;
