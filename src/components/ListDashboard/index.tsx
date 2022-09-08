import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import Cards from "../Cards";
import { List } from "./style";

const ListDashboard = () => {
  const { products, filteredProducts } = useContext(ProductContext);

  if (filteredProducts.length > 0) {
    return (
      <List>
        {filteredProducts.map((product) => {
          return <Cards key={product.id} product={product} />;
        })}
      </List>
    );
  } else {
    return (
      <List>
        {products.length > 0 ? (
          products.map((product) => {
            return <Cards key={product.id} product={product}></Cards>;
          })
        ) : (
          <h2>Ainda não foi adicionado nenhum produto nessa categoria</h2>
        )}
      </List>
    );
  }
};

export default ListDashboard;
