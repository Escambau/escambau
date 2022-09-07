import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
  useContext,
} from "react";
import api from "../services/api";
import {
  ProductAdd,
  ProductAddNegative,
  EditProductError,
  EditProductSuccess,
  deleteProductSuccess,
} from "../ToastContainer";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";

interface IProductProvider {
  children: ReactNode;
}
interface IProductContext {
  products: IProduct[];
  setProducts: Dispatch<SetStateAction<IProduct[]>>;
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
  editProduct: (data: IProduct) => void;
  categorysList: string[];
  selectCategory: string;
  setSelectCategory: Dispatch<SetStateAction<string>>;
  productToEdit: IProduct;
  setProductToEdit: Dispatch<SetStateAction<IProduct>>;
  productMoreInfo: IProduct | null;
  setProductMoreInfo: Dispatch<SetStateAction<IProduct | null>>;
  deleteProduct: (id: number) => void;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  filteredProducts: IProduct[];
  setFilteredProducts: Dispatch<SetStateAction<IProduct[]>>;
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
  const { redirectToProfile } = useContext(UserContext);
  const navigate = useNavigate();

  const [products, setProducts] = useState<IProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [search, setSearch] = useState<string>("");
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
  const [productToEdit, setProductToEdit] = useState<IProduct>(null!);
  const [productMoreInfo, setProductMoreInfo] = useState<IProduct | null>(null);

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
    setFilteredProducts(
      products.filter(
        (product) =>
          product.name.toLowerCase().includes(search.toLowerCase()) ||
          product.category.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [products, search]);

  useEffect(() => {
    const filterProductCategory = async () => {
      try {
        if (selectCategory === "Todos") {
          api.get(`/products`).then((response) => {
            setProducts(response.data);
          });
        } else {
          api
            .get(`/products`, { params: { category: selectCategory } })
            .then((response) => {
              setProducts(response.data);
            });
        }
      } catch (error) {
        console.error(error);
      }
    };
    filterProductCategory();
  }, [selectCategory]);

  useEffect(() => {
    const filterProductUserCategory = async () => {
      try {
        if (selectCategory === "Todos") {
          api
            .get(`/products?userId=${localStorage.getItem("@id")}`)
            .then((response) => {
              setUserProductList(response.data);
            });
        } else {
          api
            .get(`/products?userId=${localStorage.getItem("@id")}`, {
              params: { category: selectCategory },
            })
            .then((response) => {
              setUserProductList(response.data);
            });
        }
      } catch (error) {
        console.error(error);
      }
    };
    filterProductUserCategory();
  }, [selectCategory]);

  const filterProductsUser = (currentProduct: IProduct) => {
    if (
      userSelectedProducts.find((product) => product.id === currentProduct.id)
    ) {
      const newSelectedProducts = userSelectedProducts.filter(
        (product) => product.id !== currentProduct.id
      );
      setUserSelectedProducts(newSelectedProducts);
    } else {
      setUserSelectedProducts([...userSelectedProducts, currentProduct]);
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
    const userId = localStorage.getItem("@id");
    const token = localStorage.getItem("@token");
    api
      .post(
        "/products",
        { ...data, userId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setUserProductList([...userProductList, res.data]);
        ProductAdd();
        redirectToProfile();
      })
      .catch((error) => {
        console.log(error);
        ProductAddNegative();
      });
  };

  const editProduct = (data: IProduct) => {
    const id = productToEdit.id;
    const token = localStorage.getItem("@token");
    api
      .put(`/products/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const editedProducts = userProductList.map((product) => {
          if (product.id === res.data.id) {
            return res.data;
          } else {
            return product;
          }
        }) as IProduct[];
        setUserProductList(editedProducts);
        EditProductSuccess();
        navigate("/profile", { replace: true });
      })
      .catch(() => {
        EditProductError();
      });
  };

  const deleteProduct = async (id: number) => {
    const token = localStorage.getItem("@token");

    try {
      await api.delete(`/products/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      deleteProductSuccess();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
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
        addNewProduct,
        editProduct,
        productToEdit,
        setProductToEdit,
        productMoreInfo,
        setProductMoreInfo,
        deleteProduct,
        search,
        setSearch,
        setFilteredProducts,
        filteredProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
