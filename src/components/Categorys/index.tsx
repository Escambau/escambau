import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { Category } from "./style";

const Categorys = () => {
  const {categorysList, setSelectCategory} = useContext(ProductContext)
  return (
    <Category>
      {window.innerWidth < 764 && <h3>Categorias:</h3>}
      {window.innerWidth < 764 ? (
        <select name="" id="" onChange={(event) => setSelectCategory(event.target.value)}>
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
              <button className="btnsCategory" key={index} onClick={() => setSelectCategory(category)}>
                {category}
              </button>
            );
          })}
        </div>
      )}
    </Category>
  );
};

export default Categorys;