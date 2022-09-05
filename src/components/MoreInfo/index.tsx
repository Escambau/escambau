import { Container } from "./style";
import { motion } from "framer-motion";
import Header from "../UserDashboard/Header";
import { UserContext } from "./../../contexts/UserContext";
import { useContext } from "react";
import { useState } from "react";
interface Props {
  currentUser: UserProps;
  currentProduct: currentProductProps;
  isLogged: boolean;
}

interface currentProductProps {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  preferences: string;
}

interface UserProps {
  id: number;
  name: string;
  email: string;
  password: string;
  image: string;
  cidade: string;
  estado: string;
}

const MoreInfo = ({ currentProduct, currentUser }: Props) => {
  const { user } = useContext(UserContext);
  const [isLogged, setIsLogged] = useState<boolean>(false);

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
            <small>{currentProduct.category}</small>
            <h3>{currentProduct.name}</h3>
            <img src={currentProduct.image} alt={currentProduct.name} />
          </div>
          <div className="currentProduct-description">
            <h3>Descrição do produto:</h3>
            <p>{currentProduct.description}</p>
          </div>
        </div>
        <div className="right-wrapper">
          <div className="currentUser-info">
            <div>
              <p>Postado por:</p>
              <h3 className="currentUsername">{currentUser.name}</h3>
            </div>
            <p className="address">
              {currentUser.cidade} - {currentUser.estado}
            </p>
            <h3 className="price">
              Preço estipulado:{" "}
              <span className="currentProduct-value">
                R$ {currentProduct.price.toFixed(2)}
              </span>
            </h3>
            <p className="preferences">
              Preferências: {currentProduct.preferences}
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
