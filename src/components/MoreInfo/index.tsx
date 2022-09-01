import { Container } from "./style";
import { motion } from "framer-motion";
import HeaderUnlogged from "../HeaderUnlogged";

const MoreInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeaderUnlogged />
      <Container>
        <div className="left-wrapper">
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
              Televisão usada, mas em bom estado. Seu incrível processador a5
              Gen 5 AI torna tudo mais fácil e rápido, das transições de menu,
              até às respostas aos vários comandos que a acompanham, te
              proporcionando blablabla...
            </p>
          </div>
        </div>
        <div className="right-wrapper">
          <div className="user-info">
            <div>
              <p>Postado por:</p>
              <h3 className="username">Rodrigo Alves</h3>
            </div>
            <p className="address">Manaus-AM</p>
            <h3 className="price">
              Preço estipulado: <span className="product-value">R$ 2000</span>
            </h3>
            <p className="preferences">Preferências: Notebook, PC, TV</p>
          </div>
          <button className="btn">
            Crie sua conta para <br />
            enviar propostas de troca
          </button>
        </div>
      </Container>
    </motion.div>
  );
};

export default MoreInfo;
