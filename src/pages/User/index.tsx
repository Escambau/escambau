import ConfirmTradeModal from "../../components/ConfirmTradeModal";
import DropdownModal from "../../components/DropdownModal";
import { LoginModal } from "../../components/LoginModal";
import TradeModal from "../../components/TradeModal";
import UserDashboard from "../../components/UserDashboard";

const User = () => {
  return (
    <>
      <DropdownModal />
      <LoginModal />
      <ConfirmTradeModal />
      <TradeModal />
      <UserDashboard />
    </>
  );
};

export default User;
