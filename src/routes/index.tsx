import { Routes, Route } from "react-router-dom";
import MoreInfo from "../components/MoreInfo";
import { AddProduct } from "../pages/AddProduct";
import Dashboard from "../pages/Dashboard";
import EditProduct from "../pages/EditProduct";
import Register from "../pages/Register";
import User from "../pages/User";

export const EscambauRoutes = () => {
  return (
    <Routes>
      <Route path="/moreinfo" element={<MoreInfo />} />
      <Route path="/addproduct" element={<AddProduct/>} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/editproduct" element={<EditProduct />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<User />} />
    </Routes>
  );
};
