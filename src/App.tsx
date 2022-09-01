import React from "react";
import "./App.css";
import { AddProduct } from "./components/AddProduct";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AddProduct/>
    </div>
  );
}

export default App;
