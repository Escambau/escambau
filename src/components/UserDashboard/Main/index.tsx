import { MainTag } from "./style";
import List from "../List";
import { ProductContext } from "../../../contexts/ProductContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
const Main = () => {
  const { categorysList, setSelectCategory } = useContext(ProductContext);
  const navigate = useNavigate();
  return (
    <MainTag>
      <div className="container">
        <div className="addProduct">
<<<<<<< HEAD
          <h2>Minha lista de produtos</h2>
          <button onClick={() => navigate("/addproduct")}>
            Adicionar produto
            {/* <GoPlus /> */}
=======
          <button onClick={() => navigate("/addproduct")}>
            Adicionar novo produto
>>>>>>> f7cd5f04ff21737ee0d48c6484d7944b7c5e6118
          </button>
          <h2>Lista de produtos</h2>
        </div>

        <section className="listContainer">
          <div>
            {window.innerWidth < 764 && <h3>Categorias:</h3>}
            {window.innerWidth < 764 ? (
              <select name="" id="">
                {categorysList.map((category, index) => {
                  return (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  );
                })}
              </select>
            ) : (
              <div>
                {categorysList.map((category, index) => {
                  return (
                    <button
                      className="btnsCategory"
                      key={index}
                      onClick={() => setSelectCategory(category)}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
          <List />
        </section>
      </div>
    </MainTag>
  );
};

export default Main;
