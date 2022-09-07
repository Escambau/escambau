import { useContext } from "react";
import { CurrentContext } from "../../contexts/CurrentContext";
import { ProductContext } from "../../contexts/ProductContext";
import { Category } from "./style";

const Categorys = () => {
  const { search, categorysList, selectCategory, setSelectCategory } =
    useContext(ProductContext);
    const {windowWidth} = useContext(CurrentContext)
  return (
    <>
      <Category>
        
        {windowWidth < 764 ? (
          <div>
            {windowWidth < 764 && <h3>Categorias:</h3>}
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
          </div>
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
