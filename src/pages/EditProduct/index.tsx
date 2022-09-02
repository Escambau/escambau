import FormEditProduct from "../../components/FormEditProduct";
import Header from "../../../src/components/UserDashboard/Header";
import shopping from "../../assets/shopping.png";
import { Container } from "./style";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const EditProduct = () => {
  //const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Header />
      <Container>
        <section>
          <button
            className="profile-button"
            //onClick={navigate("/profile", { replace: true })}
          >
            Meu Perfil
          </button>
          <h2>Editar Produto</h2>
        </section>
        <main>
          <div>
            <h3>Nome do produto</h3>
            <img src={shopping} alt="" />
          </div>
          <FormEditProduct />
        </main>
      </Container>
    </motion.div>
  );
};

export default EditProduct;
