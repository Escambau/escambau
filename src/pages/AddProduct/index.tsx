import { useContext } from "react";
import Header from "../../components/UserDashboard/Header";
import { ContainerAddProduct } from "./style";
import mobile from "../../assets/mobileShop.png";
import { UserContext } from "../../contexts/UserContext";
import DropdownModal from "../../components/DropdownModal";
import { FormAddProduct } from "../../components/FormAddProduct";

export function AddProduct() {

  const { token, navigate } = useContext(UserContext);



  return (
    <>
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
    </>
  );
}
