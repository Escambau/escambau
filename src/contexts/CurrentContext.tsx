import { createContext, useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

import { IProduct } from "./ProductContext";

interface IProductProvider {
  children: ReactNode;
}

interface IUser {
  id: number;
  name: string;
  estado: string;
  cidade: string;
}

interface IProductContext {
  currentProduct: IProduct;
  currentUser: IUser;
  getCurrent: (currentId: number) => void;
}
export const CurrentContext = createContext<IProductContext>(
  {} as IProductContext
);

export const CurrentProvider = ({ children }: IProductProvider) => {
  const [currentProduct, setCurrentProduct] = useState<IProduct>(
    {} as IProduct
  );
  const [currentUser, setCurrentUser] = useState<IUser>({} as IUser);
  const navigate = useNavigate()
  
  
  const getCurrent = (currentId: number) => {
    console.log(currentId);
    const teste = async() => {
      const responseProduct = await api.get(`/products/${currentId}`)
      setCurrentProduct(responseProduct.data);
      const responseUser = await api.get(`/users/${responseProduct.data.userId}`)
      setCurrentUser(responseUser.data);
      navigate("/moreinfo");
    }
    teste()
  };

  return (
    <CurrentContext.Provider
      value={{
        currentProduct,
        currentUser,
        getCurrent,
      }}
    >
      {children}
    </CurrentContext.Provider>
  );
};
