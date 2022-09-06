import { AiFillInfoCircle } from "react-icons/ai";
import { ProductContext } from "../../../contexts/ProductContext";
import Card, { ListTag } from "./style";
import { useContext } from "react";
import { CurrentContext } from "../../../contexts/CurrentContext";

const List = () => {
  const { userProductList, setProductToEdit } = useContext(ProductContext);
  const { getCurrent } = useContext(CurrentContext);

  return (
    <ListTag>
      {userProductList?.map((product, index) => {
        return (
          <Card key={index}>
            <div>
              <img src={product.image} alt="" />

              <div>
                <div>
                  <h4>{product.category}</h4>
                  <h3>{product.name}</h3>
                </div>
                <section>
                  <p>Preço estipulado:</p>
                  <span>{product.price}</span>
                </section>
              </div>
            </div>
            {window.innerWidth > 768 && (
              <section className="container-buttons">
                <button
                  className="infoPlus"
                  onClick={() => {
                    console.log(product.id);
                    getCurrent(product.id);
                  }}
                >
                  <AiFillInfoCircle className="iconInfo" />
                  Mais informações
                </button>
                <div>
                  <button
                    className="edit-delete edit"
                    // onClick={() => setProductToEdit(card)}
                    onClick={() => setProductToEdit(product)}
                  >
                    Editar
                  </button>
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
