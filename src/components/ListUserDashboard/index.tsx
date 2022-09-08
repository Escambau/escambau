import { AiFillInfoCircle } from "react-icons/ai";
import { ProductContext } from "../../contexts/ProductContext";
import Card, { ListTag } from "./style";
import { useContext } from "react";
import { CurrentContext } from "../../contexts/CurrentContext";
import { useNavigate } from "react-router-dom";

const List = () => {
  const { userProductList, setProductToEdit, deleteProduct, filterProductUser } =
    useContext(ProductContext);
  const { getCurrent, windowWidth } = useContext(CurrentContext);
  const navigate = useNavigate();

  return (
    <ListTag>
      {(filterProductUser.length > 0 ? filterProductUser : userProductList)?.map((product, index) => {
        return (
          <Card key={index}>
            <div>
              <img src={product.image} alt="" />

              <div>
                <div>
                  <h4>{product.category}</h4>
                  <h3 onClick={() => navigate("/moreinfo")}>{product.name}</h3>
                </div>
                <section>
                  <p>Preço estipulado:</p>
                  <span>R$ {Number(product.price).toFixed(2)}</span>
                </section>
              </div>
            </div>
            <section className="container-buttons">
              {windowWidth > 768 && (
                <>
                  <button
                    className="infoPlus"
                    onClick={() => {
                      getCurrent(product.id);
                    }}
                  >
                    <AiFillInfoCircle className="iconInfo" />
                    Mais informações
                  </button>
                  <div>
                    <button
                      className="edit-delete edit"
                      onClick={() => {
                        setProductToEdit(product);
                        navigate("/editproduct");
                      }}
                    >
                      Editar
                    </button>
                    <button
                      className="edit-delete delete"
                      onClick={() => deleteProduct(product.id)}
                    >
                      Excluir
                    </button>
                  </div>
                </>
              )}
            </section>
          </Card>
        );
      })}
    </ListTag>
  );
};

export default List;
