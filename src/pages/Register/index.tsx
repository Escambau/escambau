import FormRegisterUser from "../../components/FormRegisterUser";
import { LoginModal } from "../../components/LoginModal";
import { motion } from "framer-motion";

const Register = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <LoginModal />
      <FormRegisterUser />
    </motion.div>
  );
};

export default Register;
