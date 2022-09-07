import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { Category } from "./style";

const Categorys = () => {
  const { search, categorysList, selectCategory, setSelectCategory } =
    useContext(ProductContext);
  return (
    <>
      <Category>
        {window.innerWidth < 764 && <h3>Categorias:</h3>}
        {window.innerWidth < 764 ? (
          <select
            name=""
            id=""
            onChange={(event) => setSelectCategory(event.target.value)}
          >
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
                  className={
                    selectCategory === "Todos" && index === 0
                      ? "btnAll"
                      : "btnsCategory"
                  }
                  key={index}
                  onClick={() => setSelectCategory(category)}
                >
                  {category}
                </button>
              );
            })}
          </div>
        )}
      </Category>
      <h1
        style={{ textAlign: "left", fontSize: "1.5rem", color: "var(--blue)" }}
      >
        Exibindo resultados para: {search}
      </h1>
    </>
  );
};

export default Categorys;
