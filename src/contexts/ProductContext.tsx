import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import api from "../services/api";

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
  categorysList: string[];
  selectCategory: string;
  setSelectCategory: Dispatch<SetStateAction<string>>;
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
  const [selectCategory, setSelectCategory] = useState<string>("Todos");
  const categorysList = [
    "Todos",
    "Eletrônicos e Eletrodomésticos",
    "Roupas",
    "Brinquedos",
    "Utensílios domésticos",
    "Automotivos",
    "Instrumentos musicais",
    "Decoração",
    "Entretenimento",
    "Pets",
  ];

  useEffect(() => {
    const getProducts = async () => {
      try {
        api.get("/products").then((response) => {
          setProducts(response.data);
        });
      } catch (error) {
        console.error(error);
      }
    };
    getProducts();
  }, []);

  useEffect(() => {
    const filterProductCategory = async () => {
      try {
        if (selectCategory === "Todos") {
          api.get(`/products`).then((response) => {
            setProducts(response.data);
          });
        } else {
          api.get(`/products/?category=${selectCategory}`).then((response) => {
            setProducts(response.data);
          });
        }
      } catch (error) {
        console.error(error);
      }
    };
    filterProductCategory();
  }, [selectCategory]);

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
        isModalConfirmTrade,
        setIsModalConfirmTrade,
        categorysList,
        selectCategory,
        setSelectCategory,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
