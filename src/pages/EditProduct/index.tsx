import FormEditProduct from "../../components/FormEditProduct";
import shopping from "../../assets/shopping.png";
import { Container } from "./style";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { ProductContext } from "../../contexts/ProductContext";
import DropdownModal from "../../components/DropdownModal";
import { CurrentContext } from "./../../contexts/CurrentContext";
import Header from "../../components/Header";

const EditProduct = () => {
  const navigate = useNavigate();

  const { user } = useContext(UserContext);

  const { productToEdit } = useContext(ProductContext);
  const { editProductUrl } = useContext(CurrentContext);

  return (
    <>
      {user ? (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Header />
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
                <figure>
                  {editProductUrl ? (
                    <img
                      src={editProductUrl}
                      alt="url produto"
                      onError={({ currentTarget }) => {
                        currentTarget.src = shopping;
                        currentTarget.onerror = null;
                      }}
                    />
                  ) : (
                    <img src={productToEdit.image} alt="LogoAdd" />
                  )}
                </figure>
              </div>
              <FormEditProduct />
            </main>
          </Container>
        </motion.div>
      ) : (
        <Navigate to="/" replace />
      )}
    </>
  );
};

export default EditProduct;
