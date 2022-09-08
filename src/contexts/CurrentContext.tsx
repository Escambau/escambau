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
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  productUrl: string;
  setProductUrl: React.Dispatch<React.SetStateAction<string>>;
  editProductUrl: string;
  setEditProductUrl: React.Dispatch<React.SetStateAction<string>>;
  windowWidth: number;
  setWindowWidth: React.Dispatch<React.SetStateAction<number>>;
}
export const CurrentContext = createContext<IProductContext>(
  {} as IProductContext
);

export const CurrentProvider = ({ children }: IProductProvider) => {
  const [currentProduct, setCurrentProduct] = useState<IProduct>(
    {} as IProduct
  );
  const [currentUser, setCurrentUser] = useState<IUser>({} as IUser);
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [productUrl, setProductUrl] = useState<string>("");
  const [editProductUrl, setEditProductUrl] = useState<string>("");
  const [windowWidth, setWindowWidth] = useState<number>(0)
  const navigate = useNavigate();

  const getCurrent = (currentId: number) => {
    const token = localStorage.getItem("@token");
    if (token) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
    api
      .get(`/products/${currentId}`)
      .then((response) => {
        setCurrentProduct(response.data);
        localStorage.setItem("@currentProduct", JSON.stringify(response.data));
        api
          .get(`/users/${response.data.userId}`)
          .then((response) => {
            setCurrentUser(response.data);
            localStorage.setItem("@currentUser", JSON.stringify(response.data));
            navigate("/moreinfo");
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const myTimer = () => {setWindowWidth(window.innerWidth)}
  setInterval(myTimer as any, 500)

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
        windowWidth, 
        setWindowWidth
      }}
    >
      {children}
    </CurrentContext.Provider>
  );
};
