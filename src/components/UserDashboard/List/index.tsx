import { AiFillInfoCircle } from "react-icons/ai";
import { ProductContext } from "../../../contexts/ProductContext";
import Card, { ListTag } from "./style";
import {useContext, useEffect} from "react"
import api from "../../../services/api";
import { UserContext } from "../../../contexts/UserContext";

const List = () => {
  const {userProductList, setUserProductList} = useContext(ProductContext)
  const {user} = useContext(UserContext)
  useEffect(() => {
    const getProducts = async () => {
      api.get(`/products?userId=${user?.id}`).then((response) => {
        setUserProductList(response.data);
      });
    };
    getProducts();
  }, []);
  return (
    <ListTag>
      {userProductList?.map((card, index) => {
        return (
          <Card key={index}>
            <div>
              <img src={card.image} alt="" />

              <div>
                <div>
                  <h4>{card.category}</h4>
                  <h3>{card.name}</h3>
                </div>
                <section>
                  <p>Preço estipulado:</p>
                  <span>{card.price}</span>
                </section>
              </div> 
            </div>
            {window.innerWidth > 768 && (
              <section className="container-buttons">
                <button className="infoPlus">
                  <AiFillInfoCircle className="iconInfo" />
                  Mais informações
                </button>
                <div>
                  <button className="edit-delete edit">Editar</button>
                  <button className="edit-delete delete">Excluir</button>
                </div>
              </section>
            )}
          </Card>
        );
      })}
    </ListTag>
  );
};

export default List;
