import { createContext, useState, ReactNode, useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

import { IProduct } from "./ProductContext";
import { UserContext } from "./UserContext";

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
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  productUrl: string;
  setProductUrl: React.Dispatch<React.SetStateAction<string>>;
  editProductUrl: string;
  setEditProductUrl: React.Dispatch<React.SetStateAction<string>>;
}
export const CurrentContext = createContext<IProductContext>(
  {} as IProductContext
);

export const CurrentProvider = ({ children }: IProductProvider) => {
  const { token } = useContext(UserContext);
  const [currentProduct, setCurrentProduct] = useState<IProduct>(
    {} as IProduct
  );
  const [currentUser, setCurrentUser] = useState<IUser>({} as IUser);
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [productUrl, setProductUrl] = useState<string>("");
  const [editProductUrl, setEditProductUrl] = useState<string>("");
  const navigate = useNavigate();

  const getCurrent = (currentId: number) => {
    if (token) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
    const teste = async () => {
      try {
        const responseProduct = await api.get(`/products/${currentId}`);
        setCurrentProduct(responseProduct.data);
        const responseUser = await api.get(
          `/users/${responseProduct.data.userId}`
        );
        setCurrentUser(responseUser.data);
        navigate("/moreinfo");
      } catch (error) {
        console.error(error);
      }
    };
    teste();
  };

  return (
    <CurrentContext.Provider
      value={{
        currentProduct,
        currentUser,
        getCurrent,
        isLogged,
        setIsLogged,
        productUrl,
        setProductUrl,
        editProductUrl,
        setEditProductUrl,
      }}
    >
      {children}
    </CurrentContext.Provider>
  );
};
