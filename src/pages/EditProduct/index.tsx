import FormEditProduct from "../../components/FormEditProduct";
import Header from "../../../src/components/UserDashboard/Header";
import shopping from "../../assets/shopping.png";
import { Container } from "./style";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { ProductContext } from "../../contexts/ProductContext";
import HeaderUnlogged from "../../components/HeaderUnlogged";
import DropdownModal from "../../components/DropdownModal";

const EditProduct = () => {
  const navigate = useNavigate();

  const { token } = useContext(UserContext);

  const { productToEdit } = useContext(ProductContext);

  return (
    <>
      {
        //token ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {token ? <Header /> : <HeaderUnlogged />}
          <DropdownModal />
          <Container>
            <section>
              <button
                className="profile-button"
                onClick={() => navigate("/profile", { replace: true })}
              >
                Meu Perfil
              </button>
              <h2>Editar Produto</h2>
            </section>
            <main>
              <div>
                <h3>{productToEdit ? `${productToEdit.name}` : "Produto"}</h3>
                <img src={shopping} alt="" />
              </div>
              <FormEditProduct />
            </main>
          </Container>
        </motion.div>
        // ) : (
        // <Navigate to="/" replace />
        //)
      }
    </>
  );
};

export default EditProduct;
