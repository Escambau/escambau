import { HeaderTag } from "./style";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import Switch from "react-switch";

const HeaderRegister = () => {
  const { setIsModalLogin } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <HeaderTag>
      <div className="container">
        <button onClick={() => navigate("/")}>
          <h1>Escambau</h1>
        </button>
        <div className="container-switch-login">
          <Switch
            onChange={() => {}}
            checked={true}
            checkedIcon={false}
            uncheckedIcon={false}
          />
          <button className="btnLogin" onClick={() => setIsModalLogin(true)}>
            Login
          </button>
        </div>
      </div>

      {/* <div className="searchBar">
        <input type="text" placeholder="Busque por produtos aqui..." />
        <button>
          <AiOutlineSearch className="magnifyGlass" />
        </button>
      </div> */}
    </HeaderTag>
  );
};

export default HeaderRegister;
