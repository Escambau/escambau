import { Container } from "./style";
import { motion } from "framer-motion";
import Header from "../UserDashboard/Header";

interface Props {
  user: UserProps;
  product: ProductProps;
  isLogged: boolean;
}

interface ProductProps {
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

const MoreInfo = ({ product, user, isLogged }: Props) => {
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
          <div className="product-info">
            <small>{product.category}</small>
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-description">
            <h3>Descrição do produto:</h3>
            <p>{product.description}</p>
          </div>
        </div>
        <div className="right-wrapper">
          <div className="user-info">
            <div>
              <p>Postado por:</p>
              <h3 className="username">{user.name}</h3>
            </div>
            <p className="address">
              {user.cidade} - {user.estado}
            </p>
            <h3 className="price">
              Preço estipulado:{" "}
              <span className="product-value">
                R$ {product.price.toFixed(2)}
              </span>
            </h3>
            <p className="preferences">Preferências: {product.preferences}</p>
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
