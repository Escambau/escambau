import { useContext } from "react";
import Header from "../../components/UserDashboard/Header";
import { ContainerAddProduct } from "./style";
import mobile from "../../assets/mobileShop.png";
import { UserContext } from "../../contexts/UserContext";
import DropdownModal from "../../components/DropdownModal";
import { FormAddProduct } from "../../components/FormAddProduct";
import { Navigate } from "react-router-dom";
import { motion } from "framer-motion";

export function AddProduct() {

  const { navigate } = useContext(UserContext);
  const tokenItem = localStorage.getItem("@token");

  return (
    <>
      { 
        tokenItem ? (
        <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 1 }}
        >
          <Header />
          <DropdownModal />
          <ContainerAddProduct>
            <div className="box-header">
              <button onClick={() => navigate("/profile", {replace: true})}>Meu Perfil</button>
              <h2>Adicionar Produto</h2>
            </div>

            <section>
              <section className="section-main">
                <div className="apresenting-space">
                  <article>
                    <p>Aqui sempre tem um achado exclusivo para chamar de seu.</p>
                    <p>A gente faz o escambo por você.</p>
                  </article>
                  <figure>
                    <img src={mobile} alt="LogoAdd" />
                  </figure>
                </div>
                <FormAddProduct/>
              </section>
            </section>
          </ContainerAddProduct>
        </motion.div>
        ) : (
          <Navigate to='/' replace />
        )
      }
    </>
  );
}
