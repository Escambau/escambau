import { Container, Box } from "./style";
import { ProductContext } from "../../contexts/ProductContext";
import { useContext } from "react";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";

const ConfirmTradeModal = () => {
  const { isModalConfirmTrade, setIsModalConfirmTrade, setIsTradeModal } =
    useContext(ProductContext);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {isModalConfirmTrade && (
        <Container>
          <Box>
            <div>
              <p>Deseja realmente fazer essa troca?</p>
              <button
                className="x"
                onClick={() => setIsModalConfirmTrade(false)}
              >
                <AiOutlineClose />
              </button>
            </div>

            <section>
              <button
                className="confirm"
                onClick={() => {
                  setIsModalConfirmTrade(false);
                  setIsTradeModal(false);
                }}
              >
                Confirmar
              </button>
              <button
                className="cancel"
                onClick={() => setIsModalConfirmTrade(false)}
              >
                Cancelar
              </button>
            </section>
          </Box>
        </Container>
      )}
    </motion.div>
  );
};

export default ConfirmTradeModal;
