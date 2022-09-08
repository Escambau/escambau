import { MainTag } from "./style";
import { useNavigate } from "react-router-dom";
import Categorys from "../Categorys";
import List from "../ListUserDashboard";
const Main = () => {
  const navigate = useNavigate();
  return (
    <MainTag>
      <div className="container">
        <div className="addProduct">
          <h2>Minha lista de produtos</h2>
          <button onClick={() => navigate("/addproduct")}>
            Adicionar novo produto
          </button>
        </div>

        <section className="listContainer">
          <div>
            <Categorys />
          </div>
          <List />
        </section>
      </div>
    </MainTag>
  );
};

export default Main;
