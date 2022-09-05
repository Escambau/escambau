import { Container } from "./style";
import { motion } from "framer-motion";
import Header from "../UserDashboard/Header";
import { IUser, UserContext } from "./../../contexts/UserContext";
import { useContext, useEffect } from "react";
import { useState } from "react";
import api from "../../services/api";
import { ProductContext } from "../../contexts/ProductContext";

const MoreInfo = () => {
  const { productMoreInfo } = useContext(ProductContext);
  const { user } = useContext(UserContext);
  const [productUser, setProductUser] = useState<IUser | null>(null);
  const [isLogged, setIsLogged] = useState<boolean>(false);

  useEffect(() => {
    api
      .get(`/users/${productMoreInfo?.userId}`)
      .then((response) => setProductUser(response.data));
  }, [productMoreInfo]);

  if (!!user) setIsLogged(true);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <Container isLogged={isLogged}>
        <div className="left-wrapper">
          <div className="currentProduct-info">
            <small>{productMoreInfo?.category}</small>
            <h3>{productMoreInfo?.name}</h3>
            <img src={productMoreInfo?.image} alt={productMoreInfo?.name} />
          </div>
          <div className="currentProduct-description">
            <h3>Descrição do produto:</h3>
            <p>{productMoreInfo?.description}</p>
          </div>
        </div>
        <div className="right-wrapper">
          <div className="currentUser-info">
            <div>
              <p>Postado por:</p>
              <h3 className="currentUsername">{productUser?.name}</h3>
            </div>
            <p className="address">
              {productUser?.cidade} - {productUser?.estado}
            </p>
            <h3 className="price">
              Preço estipulado:{" "}
              <span className="currentProduct-value">
                R$ {productMoreInfo?.price.toFixed(2)}
              </span>
            </h3>
            <p className="preferences">
              Preferências: {productMoreInfo?.preferences}
            </p>
          </div>
          <button className="btn" disabled={isLogged}>
            {isLogged ? "Solicitar troca" : "Criar minha conta"}
          </button>
        </div>
      </Container>
    </motion.div>
  );
};

export default MoreInfo;
