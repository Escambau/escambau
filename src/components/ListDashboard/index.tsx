import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import Cards from "../Cards";
import { List } from "./style";

const ListDashboard = () => {
  const { products } = useContext(ProductContext);

  return (
    <List>
      {products?.map((card) => {
        return <Cards key={card.id} card={card}></Cards>;
      })}
    </List>
  );
};

export default ListDashboard;
