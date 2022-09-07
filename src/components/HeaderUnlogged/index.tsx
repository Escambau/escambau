import { HeaderTag } from "./style";
import { AiOutlineSearch } from "react-icons/ai";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";
import Switch from "react-switch";

const HeaderUnlogged = () => {
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
