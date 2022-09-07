import { useContext } from "react";
import Categorys from "../../components/Categorys";
import ConfirmTradeModal from "../../components/ConfirmTradeModal";
import DropdownModal from "../../components/DropdownModal";
import Header from "../../components/Header";
import HeaderUnlogged from "../../components/HeaderUnlogged";
import ListDashboard from "../../components/ListDashboard";
import { LoginModal } from "../../components/LoginModal";
import { MainTag } from "../../components/Main/style";
import TradeModal from "../../components/TradeModal";
import { UserContext } from "../../contexts/UserContext";
import { motion } from "framer-motion";

const Dashboard = () => {
  const { user } = useContext(UserContext);
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
      {user ? <Header /> : <HeaderUnlogged />}
      <MainTag>
        <div className="container">
          <h2>Todos os anúncios</h2>
          <Categorys />
          <ListDashboard />
        </div>
      </MainTag>
    </motion.div>
  );
};

export default Dashboard;
