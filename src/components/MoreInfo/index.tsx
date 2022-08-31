import { Container } from "./style";
import GlobalStyle from "./../../styles/global";

const MoreInfo = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <div className="product-info">
          <small>Tecnologia</small>
          <h3>Smart TV LED 43" LG AI 4K HDR</h3>
          <img
            src="https://a-static.mlcdn.com.br/800x560/smart-tv-65-crystal-4k-samsung-65au7700-wi-fi-bluetooth-hdr-alexa-built-in-3-hdmi-1-usb/magazineluiza/193441500/19110def90154ca8cd79a94421c19010.jpg"
            alt="smart tv"
          />
        </div>
        <div className="product-description">
          <h3>Descrição do produto:</h3>
          <p>
            Televisão usada, mas em bom estado. Seu incrível processador a5 Gen
            5 AI torna tudo mais fácil e rápido, das transições de menu, até às
            respostas aos vários comandos que a acompanham, te proporcionando
            blablabla...
          </p>
        </div>
        <div className="user-info">
          <div>
            <p>Postado por:</p>
            <h3>Rodrigo Alves</h3>
            <p>Manaus-AM</p>
            <h3>Preço estipulado: R$ 2000</h3>
            <p>
              <strong>Preferências: </strong>Notebook, PC, TV
            </p>
          </div>
          <button>Criar minha conta</button>
        </div>
      </Container>
    </>
  );
};

export default MoreInfo;
