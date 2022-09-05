import { createContext, useState, ReactNode } from "react";
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
  currentId: number | null;
  setCurrentId:
    | React.Dispatch<React.SetStateAction<number>>
    | React.Dispatch<React.SetStateAction<null>>;
  currentProduct: IProduct;
  currentUser: IUser;
  getCurrent: (id: number) => void;
}
export const CurrentContext = createContext<IProductContext>(
  {} as IProductContext
);

export const CurrentProvider = ({ children }: IProductProvider) => {
  const [currentId, setCurrentId] = useState(null);
  const [currentProduct, setCurrentProduct] = useState<IProduct>(
    {} as IProduct
  );
  const [currentUser, setCurrentUser] = useState<IUser>({} as IUser);

  const getCurrent = (currentId: number) => {
    api.get(`/products/${currentId}`).then((response) => {
      setCurrentProduct(response.data);
      api.get(`/users/${response.data.id}`).then((response) => {
        setCurrentUser(response.data);
      });
    });
  };

  return (
    <CurrentContext.Provider
      value={{
        currentId,
        setCurrentId,
        currentProduct,
        currentUser,
        getCurrent,
      }}
    >
      {children}
    </CurrentContext.Provider>
  );
};
