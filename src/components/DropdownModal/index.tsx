import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { Container, Overlay } from "./style";
import { motion } from "framer-motion";

const DropdownModal = () => {
  const { logOut, isDropdownModal, setIsDropdownModal } =
    useContext(UserContext);
  const navigate = useNavigate();

  return (
    <>
      {isDropdownModal ? (
        <Overlay onClick={() => setIsDropdownModal(false)}>
          <motion.div
            initial={{ opacity: 0, x: 0, y: -100 }}
            animate={{ opacity: 1, x: -70, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Container>
              <button
                className="profile"
                onClick={() => {
                  navigate("/profile");
                  setIsDropdownModal(false);
                }}
              >
                Perfil
              </button>
              <button
                className="exit"
                onClick={() => {
                  logOut();
                  setIsDropdownModal(false);
                }}
              >
                Sair
              </button>
            </Container>
          </motion.div>
        </Overlay>
      ) : (
        <></>
      )}
    </>
  );
};

export default DropdownModal;
