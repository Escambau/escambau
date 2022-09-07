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
        <div className="searchResults">
          {search.length > 0 ? (
            <h1>Exibindo resultados para: {search}</h1>
          ) : (
            <h1 style={{ visibility: "hidden" }}> sem busca</h1>
          )}
        </div>
      </Category>
    </>
  );
};

export default Categorys;
