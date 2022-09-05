import { ModalLogin } from "../../components/LoginModal/style";
import RegisterForm from "../../components/RegisterForm";
import { UserContext } from "../../contexts/UserContext";
import {useContext} from "react"
import { LoginModal } from "../../components/LoginModal";

const Register = () => {
  const {isModalLogin} = useContext(UserContext)
  return (
    <>
      <LoginModal />
      <RegisterForm />
    </>
  )
};

export default Register;
