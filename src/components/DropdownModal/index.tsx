import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { Container } from "./style";

const DropdownModal = () => {
  const { logOut, isDropdownModal, setIsDropdownModal } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <>
      {isDropdownModal ? (
        <Container>
          <button className="profile" onClick={() => {
            navigate("/profile")
            setIsDropdownModal(false)
            }}>
            Perfil
          </button>
          <button className="exit" onClick={() => {
            logOut()
            setIsDropdownModal(false)
            }}>
            Sair
          </button>
        </Container>
      ) : (
        <></>
      )}
    </>
  );
};

export default DropdownModal;
