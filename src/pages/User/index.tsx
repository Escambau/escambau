import DropdownModal from "../../components/DropdownModal";
import { LoginModal } from "../../components/LoginModal";
import UserDashboard from "../../components/UserDashboard"

const User = () => {
    return (
        <>
            <DropdownModal />
            <LoginModal />
            <UserDashboard />
        </>
    )
}

export default User;