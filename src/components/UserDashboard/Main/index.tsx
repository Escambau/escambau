import { MainTag } from "./style";
import { GoPlus } from "react-icons/go";
import List from "../List";
import { ProductContext } from "../../../contexts/ProductContext";
import {useContext} from "react"
import { useNavigate } from "react-router-dom";
const Main = () => {
  const {categorysList} = useContext(ProductContext)
  const navigate = useNavigate()
  return (
    <MainTag>
      <div className="container">
        <div className="addProduct">
          <h2>Adicionar novo produto</h2>
          <button onClick={() => navigate("/addproduct")}>
            <GoPlus />
          </button>
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
                    <button className="btnsCategory" key={index}>
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
