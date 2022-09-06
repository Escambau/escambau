import { useContext } from "react";
import Categorys from "../../components/Categorys";
import ConfirmTradeModal from "../../components/ConfirmTradeModal";
import DropdownModal from "../../components/DropdownModal";
import HeaderUnlogged from "../../components/HeaderUnlogged";
import ListDashboard from "../../components/ListDashboard";
import { LoginModal } from "../../components/LoginModal";
import TradeModal from "../../components/TradeModal";
import Header from "../../components/UserDashboard/Header";
import { MainTag } from "../../components/UserDashboard/Main/style";
import { UserContext } from "../../contexts/UserContext";

const Dashboard = () => {
  const { token, isModalLogin } = useContext(UserContext);
  return (
    <>
      <DropdownModal />
      <LoginModal />
      <ConfirmTradeModal />
      <TradeModal />
      {token ? <Header /> : <HeaderUnlogged />}
      <MainTag>
        <div className="container">
          <Categorys />
          <ListDashboard />
        </div>
      </MainTag>
    </>
  );
};

export default Dashboard;
