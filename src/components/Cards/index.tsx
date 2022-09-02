import { useContext } from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import { UserContext } from "../../contexts/UserContext";
import { Card } from "./style";

const Cards = ({key, card}: any) => {
  const {user} = useContext(UserContext)
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
            <span>{card.price}</span>
          </section>
        </div>
      </div>

      <label className="containerButtons">
        {user ?
          <>
            <button className="btnTrade">Trocar</button>
            <button className="infoPlus">
              <AiFillInfoCircle className="iconInfo" />
              Mais informações
            </button>
          </>
          :
          <>
            <button>Criar minha conta</button>
            <button className="infoPlus">
              <AiFillInfoCircle className="iconInfo" />
              Mais informações
            </button>
          </>
        }
      </label>
    </Card>
  );
};

export default Cards;
