import "./App.css";
import GlobalStyle from "./styles/global";
import MoreInfo from "./components/MoreInfo";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import { AddProduct } from "./pages/AddProduct";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ToastContainer />

      <Routes>
        <Route path="/moreinfo" element={<MoreInfo />} />
        <Route path="/addproduct" element={<AddProduct />} />
      </Routes>
    </div>
  );
}

export default App;
