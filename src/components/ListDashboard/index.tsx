import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import Cards from "../Cards";
import { List } from "./style";

const ListDashboard = () => {
  const { products, setProducts } = useContext(ProductContext);

  return (
    <List>
      {products.length > 0 ?
      products.map((card) => {
        return <Cards key={card.id} card={card}></Cards>;
      })
      :
      <h2>Ainda não foi adicionado nenhum produto nessa categoria</h2>
      }
    </List>
  );
};

export default ListDashboard;
