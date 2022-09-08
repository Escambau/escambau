import ConfirmTradeModal from "../../components/ConfirmTradeModal";
import DropdownModal from "../../components/DropdownModal";
import { LoginModal } from "../../components/LoginModal";
import TradeModal from "../../components/TradeModal";
import UserDashboard from "../../components/UserDashboard";
import { motion } from "framer-motion";

const User = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <DropdownModal />
      <LoginModal />
      <ConfirmTradeModal />
      <TradeModal />
      <UserDashboard />
    </motion.div>
  );
};

export default User;
