import { useContext } from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { CurrentContext } from "../../contexts/CurrentContext";
import { ProductContext } from "../../contexts/ProductContext";
import { UserContext } from "../../contexts/UserContext";
import { Card } from "./style";

const Cards = ({ key, card }: any) => {
  const { user } = useContext(UserContext);
  const { setIsTradeModal } = useContext(ProductContext);
  const {getCurrent} = useContext(CurrentContext)
  const navigate = useNavigate();
  return (
    <Card key={key}>
      <div>
        <img src={card.image} alt="" />

        <div>
          <div>
            <h4>{card.category}</h4>
            <h3>{card.name}</h3>
          </div>
          <section>
            {window.innerWidth > 500 && <p>Preço estipulado:</p>}
            <span>R$ {card.price.toFixed(2)}</span>
          </section>
        </div>
      </div>

      <label className="containerButtons">
        {user ? (
          <>
            <button className="btnTrade" onClick={() => setIsTradeModal(true)}>
              Trocar
            </button>
            <button className="infoPlus" onClick={() => {
                    console.log(card.id);
                    getCurrent(card.id)
                  }}>
              <AiFillInfoCircle className="iconInfo" />
              Mais informações
            </button>
          </>
        ) : (
          <>
            <button onClick={() => navigate("/register")}>
              Criar minha conta
            </button>
            <button className="infoPlus" onClick={() => {
                    console.log(card.id);
                    getCurrent(card.id)
                  }}>
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
