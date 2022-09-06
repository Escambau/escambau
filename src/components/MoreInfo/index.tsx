import { motion } from "framer-motion";
import Header from "../UserDashboard/Header";
import { CurrentContext } from "../../contexts/CurrentContext";
import { UserContext } from "./../../contexts/UserContext";
import { useContext } from "react";
import { Container } from "./style";
import HeaderUnlogged from "../HeaderUnlogged";

const MoreInfo = () => {
  const { token } = useContext(UserContext);
  const { currentUser, currentProduct, isLogged } = useContext(CurrentContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {token ? <Header /> : <HeaderUnlogged />}
      <Container isLogged={isLogged}>
        <section className="left-wrapper">
          <div className="product-info">
            <small>
              {currentProduct?.category}
              {" >"}
            </small>
            <h3>{currentProduct?.name}</h3>
            <img src={currentProduct?.image} alt={currentProduct?.name} />
          </div>

          <div className="user-info">
            <div className="user-info-name-address">
              <div className="user-info-name">
                <p>Postado por:</p>
                <h3 className="username">{currentUser?.name}</h3>
              </div>
              <p>
                {currentUser?.cidade} - {currentUser?.estado}
              </p>
            </div>

            <div className="user-info-price-preferences">
              <div className="price">
                <p>Preço estipulado:</p>
                <span className="product-value">
                  R$ {currentProduct?.price.toFixed(2)}
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
          <button className="btn" disabled={isLogged}>
            {token ? "Solicitar troca" : "Criar minha conta"}
          </button>
        </section>
      </Container>
    </motion.div>
  );
};

export default MoreInfo;
