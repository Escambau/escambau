import { HeaderTag } from "./style";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { ColorsContext } from "../../contexts/ColorsContext";
import { BsMoonFill } from "react-icons/bs";
import Switch from "react-switch";

const HeaderRegister = () => {
  const { toggleTheme } = useContext(ColorsContext);
  const { colors, title } = useContext(ThemeContext);
  const { setIsModalLogin } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <HeaderTag>
      <div className="container">
        <button onClick={() => navigate("/")}>
          <h1>Escambau</h1>
        </button>
        <div className="container-switch-login">
          <div className="toggle-moon">
            <Switch
              onChange={toggleTheme}
              checked={title === "dark"}
              checkedIcon={false}
              uncheckedIcon={false}
              height={15}
              width={40}
              handleDiameter={20}
              offColor={colors.darkGrey}
              onColor={colors.blue}
            />
            <BsMoonFill className="moon" />
          </div>
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
