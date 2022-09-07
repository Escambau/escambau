import { motion } from "framer-motion";
import { CurrentContext } from "../../contexts/CurrentContext";
import { UserContext } from "./../../contexts/UserContext";
import { useContext } from "react";
import { Container } from "./style";
import HeaderUnlogged from "../HeaderUnlogged";
import { ProductContext } from "../../contexts/ProductContext";
import { useNavigate } from "react-router-dom";
import ConfirmTradeModal from "../ConfirmTradeModal";
import Header from "../Header";
import DropdownModal from "../DropdownModal";

const MoreInfo = () => {
  const { user } = useContext(UserContext);
  const { setIsTradeModal, setProductToEdit, deleteProduct } =
    useContext(ProductContext);
  const { isLogged } = useContext(CurrentContext);
  const currentProduct = JSON.parse(
    localStorage.getItem("@currentProduct") as any
  );
  const currentUser = JSON.parse(localStorage.getItem("@currentUser") as any);
  const navigate = useNavigate();
    
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {user ? <Header /> : <HeaderUnlogged />}
        <ConfirmTradeModal />
        <DropdownModal />
        <Container isLogged={isLogged}>
          <section className="left-wrapper">
            <div className="product-info">
              <small>{currentProduct?.category}</small>
              <h3>{currentProduct?.name}</h3>
              <img src={currentProduct?.image} alt={currentProduct?.name} />
            </div>

            <div className="user-info">
              <div className="user-info-name-address">
                <div className="user-info-name">
                  <p>Postado por:</p>
                  <h3 className="username">{currentUser?.name}</h3>
                </div>
                <p className="city">
                  {currentUser?.cidade} - {currentUser?.estado}
                </p>
              </div>

              <div className="user-info-price-preferences">
                <div className="price">
                  <p>Preço estipulado:</p>
                  <span className="product-value">
                    R$ {Number(currentProduct?.price).toFixed(2)}
                  </span>
                </div>
                <p className="preferences">
                  Preferências: {currentProduct?.preferences}
                </p>
              </div>
            </div>
          </section>

          <section className="right-wrapper">
            <div className="product-description">
              <h3>Descrição do produto:</h3>
              <p>{currentProduct?.description}</p>
            </div>
            <div className="btn-wrapper">
              {user?.id !== currentProduct?.userId ?  (
                <button
                  className="btn"
                  onClick={() =>
                    user ? setIsTradeModal(true) : navigate("/register")
                  }
                >
                  {user ? "Solicitar troca" : "Criar minha conta"}
                </button>
              ) : (
                <div className="btn-container">
                  <button
                    className="edit-delete edit"
                    onClick={() => {
                      setProductToEdit(currentProduct);
                      navigate("/editproduct");
                    }}
                  >
                    Editar
                  </button>
                  <button
                    className="edit-delete delete"
                    onClick={() => deleteProduct(currentProduct.id)}
                  >
                    Excluir
                  </button>
                </div>
              )}
            </div>
          </section>
        </Container>
      </motion.div>
    </>
  );
};

export default MoreInfo;
