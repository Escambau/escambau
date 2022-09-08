import { HeaderTag } from "./style";
import { AiOutlineSearch } from "react-icons/ai";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";
import { ThemeContext } from "styled-components";
import { ColorsContext } from "../../contexts/ColorsContext";
import { BsMoonFill } from "react-icons/bs";
import Switch from "react-switch";

const HeaderUnlogged = () => {
  const { toggleTheme } = useContext(ColorsContext);
  const { colors, title } = useContext(ThemeContext);
  const { setSearch } = useContext(ProductContext);
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

      <div className="searchBar">
        <input
          type="text"
          placeholder="Busque por produtos aqui..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>
          <AiOutlineSearch className="magnifyGlass" />
        </button>
      </div>
    </HeaderTag>
  );
};

export default HeaderUnlogged;
