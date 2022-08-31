import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface IProductProvider {
  children: ReactNode;
}
interface IProductContext {
  products: any[];
  setProducts: Dispatch<SetStateAction<any[]>>;
  isModalLogin: boolean;
  setIsModalLogin: Dispatch<SetStateAction<boolean>>;
  isModalConfirmTrade: boolean;
  setIsModalConfirmTrade: Dispatch<SetStateAction<boolean>>;
  currentProduct: boolean;
  setCurrentProduct: Dispatch<SetStateAction<boolean>>;
}

export const ProductContext = createContext<IProductContext>(
  {} as IProductContext
);

export function ProductProvider({ children }: IProductProvider) {
  const [products, setProducts] = useState<any[]>([]);
  const [isModalLogin, setIsModalLogin] = useState<boolean>(false);
  const [isModalConfirmTrade, setIsModalConfirmTrade] =
    useState<boolean>(false);
  const [currentProduct, setCurrentProduct] = useState<boolean>(false);

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        isModalLogin,
        setIsModalLogin,
        isModalConfirmTrade,
        setIsModalConfirmTrade,
        currentProduct,
        setCurrentProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
