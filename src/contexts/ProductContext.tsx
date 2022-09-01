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
  products: IProduct[];
  setProducts: Dispatch<SetStateAction<never[]>>;
  isModalLogin: boolean;
  setIsModalLogin: Dispatch<SetStateAction<boolean>>;
  isTradeModal: boolean;
  setIsTradeModal: Dispatch<SetStateAction<boolean>>;
  currentProduct: boolean;
  setCurrentProduct: Dispatch<SetStateAction<boolean>>;
  userSelectedProducts: IProduct[];
  setUserSelectedProducts: Dispatch<SetStateAction<IProduct[]>>;
  userProductList: IProduct[];
  setUserProductList: Dispatch<SetStateAction<IProduct[]>>;
  filterProductsUser: (currentProduct: IProduct) => void;
  isSelected: (currentProduct: IProduct) => boolean;
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  userId: number;
}

export const ProductContext = createContext<IProductContext>(
  {} as IProductContext
);

export function ProductProvider({ children }: IProductProvider) {
  const [products, setProducts] = useState([]);
  const [isModalLogin, setIsModalLogin] = useState<boolean>(false);
  const [isTradeModal, setIsTradeModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<boolean>(false);
  const [userSelectedProducts, setUserSelectedProducts] = useState<IProduct[]>(
    [] as IProduct[]
  );
  const [userProductList, setUserProductList] = useState<IProduct[]>(
    [] as IProduct[]
  );

  const filterProductsUser = (currentProduct: IProduct) => {
    if (
      userSelectedProducts.find((product) => product.id === currentProduct.id)
    ) {
      const newSelectedProducts = userSelectedProducts.filter(
        (product) => product.id !== currentProduct.id
      );
      setUserSelectedProducts(newSelectedProducts);
      console.log("retira");
    } else {
      setUserSelectedProducts([...userSelectedProducts, currentProduct]);
      console.log("coloca");
    }
  };

  const isSelected = (currentProduct: IProduct) => {
    if (
      userSelectedProducts.find((product) => product.id === currentProduct.id)
    ) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        isModalLogin,
        setIsModalLogin,
        isTradeModal,
        setIsTradeModal,
        currentProduct,
        setCurrentProduct,
        userSelectedProducts,
        setUserSelectedProducts,
        userProductList,
        setUserProductList,
        filterProductsUser,
        isSelected,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}