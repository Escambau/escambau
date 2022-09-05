import { Container } from "./style";
import { motion } from "framer-motion";
import Header from "../UserDashboard/Header";

const MoreInfo = ({ product, user }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <Container>
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
          <button className="btn">
            Crie sua conta para <br />
            enviar propostas de troca
          </button>
        </div>
      </Container>
    </motion.div>
  );
};

export default MoreInfo;
