import { useContext } from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { CurrentContext } from "../../contexts/CurrentContext";
import { IProduct, ProductContext } from "../../contexts/ProductContext";
import { UserContext } from "../../contexts/UserContext";
import { Card } from "./style";

interface ICardsContext{
  key: number;
  product: IProduct;
}

const Cards = ({ product }: ICardsContext) => {
  const { token } = useContext(UserContext);
  const { setIsTradeModal } = useContext(ProductContext);
  const { getCurrent } = useContext(CurrentContext);
  const navigate = useNavigate();
  return (
    <Card onClick={() => navigate("/moreinfo")}>
      <div>
        <img src={product.image} alt="" />

        <div>
          <div>
            <h4>{product.category}</h4>
            <h3>{product.name}</h3>
          </div>
          <section>
            {window.innerWidth > 500 && <p>Preço estipulado:</p>}
            <span>R$ {product.price}</span>
          </section>
        </div>
      </div>

      <label className="containerButtons">
        {token ? (
          <>
            <button className="btnTrade" onClick={() => setIsTradeModal(true)}>
              Trocar
            </button>
            <button className="infoPlus" onClick={() => getCurrent(product.id)}>
              <AiFillInfoCircle className="iconInfo" />
              Mais informações
            </button>
          </>
        ) : (
          <>
            <button onClick={() => navigate("/register")}>
              Criar minha conta
            </button>
            <button className="infoPlus" onClick={() => getCurrent(product.id)}>
              <AiFillInfoCircle className="iconInfo" />
              Mais informações
            </button>
          </>
        )}
      </label>
    </Card>
  );
};

export default Cards;
