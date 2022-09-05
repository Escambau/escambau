import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";
import api from "../services/api";
import { ProductAdd, ProductAddNegative } from "../ToastContainer";
import { UserContext } from "./UserContext";

interface IProductProvider {
  children: ReactNode;
}
interface IProductContext {
  products: IProduct[];
  setProducts: Dispatch<SetStateAction<IProduct[]>>;
  isModalLogin: boolean;
  setIsModalLogin: Dispatch<SetStateAction<boolean>>;
  isTradeModal: boolean;
  isModalConfirmTrade: boolean;
  setIsModalConfirmTrade: Dispatch<SetStateAction<boolean>>;
  setIsTradeModal: Dispatch<SetStateAction<boolean>>;
  currentProduct: boolean;
  setCurrentProduct: Dispatch<SetStateAction<boolean>>;
  userSelectedProducts: IProduct[];
  setUserSelectedProducts: Dispatch<SetStateAction<IProduct[]>>;
  userProductList: IProduct[];
  setUserProductList: Dispatch<SetStateAction<IProduct[]>>;
  filterProductsUser: (currentProduct: IProduct) => void;
  isSelected: (currentProduct: IProduct) => boolean;
  addNewProduct: (data: IProduct) => void;
  // categorysList: string[];
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  userId: number;
  preferences?: string;
}

export const ProductContext = createContext<IProductContext>(
  {} as IProductContext
);

export function ProductProvider({ children }: IProductProvider) {

  const {redirectToProfile} = useContext(UserContext)

  const [products, setProducts] = useState<IProduct[]>([]);
  const [isModalLogin, setIsModalLogin] = useState<boolean>(false);
  const [currentProduct, setCurrentProduct] = useState<boolean>(false);
  const [isModalConfirmTrade, setIsModalConfirmTrade] =
    useState<boolean>(false);
  const [userSelectedProducts, setUserSelectedProducts] = useState<IProduct[]>(
    [] as IProduct[]
  );
  const [userProductList, setUserProductList] = useState<IProduct[]>(
    [] as IProduct[]
  );
  const [isTradeModal, setIsTradeModal] = useState<boolean>(false);
  // const categorysList = [
  //   "Eletrônicos e Eletrodomésticos",
  //   "Roupas",
  //   "Brinquedos",
  //   "Utensílios",
  //   "Domésticos",
  //   "Automotivos",
  //   "Instrumentos",
  //   "Musicais",
  //   "Decoração",
  //   "Entretenimento",
  //   "Pets",
  // ];
  
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
  const addNewProduct = (data: IProduct) => {
    api.post("/products", data)
    .then(res => {
      setUserProductList([...userProductList, res.data]);
      ProductAdd();
      redirectToProfile();
    })
    .catch(() => ProductAddNegative());
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
        isModalConfirmTrade,
        setIsModalConfirmTrade,
        addNewProduct
        // categorysList
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
