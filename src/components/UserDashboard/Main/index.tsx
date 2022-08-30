import { MainTag } from "./style";
import { GoPlus } from "react-icons/go";
import List from "../List";

const Main = () => {
  const arrayCategory = [
    "Tecnologia",
    "Automotivo",
    "Eletrodomésticos",
    "Game",
    "Móveis",
  ];
  return (
    <MainTag>
      <div className="container">
        <div className="addProduct">
          <h2>Adicionar novo produto</h2>
          <button>
            <GoPlus />
          </button>
        </div>

        <section className="listContainer">
          <h3>Sua lista de produtos:</h3>
          <div>
            {window.innerWidth < 764 && <h3>Categorias:</h3>}
            {window.innerWidth < 764 ? (
              <select name="" id="">
                {arrayCategory.map((category, index) => {
                  return (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  );
                })}
              </select>
            ) : (
              <div>
                {arrayCategory.map((category, index) => {
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
