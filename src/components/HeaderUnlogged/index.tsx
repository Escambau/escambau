import { HeaderTag } from "./style";
import { AiOutlineSearch } from "react-icons/ai";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const HeaderUnlogged = () => {
  const {setIsModalLogin} = useContext(UserContext)
  const navigate = useNavigate()
  return (
    <HeaderTag>
      <div className="container">
        <button onClick={() => navigate("/")}>
          <h1>Escambau</h1>
        </button>
        <button className="btnLogin"
        onClick={() => setIsModalLogin(true)}
        >
          Login
        </button>
      </div>

      <div className="searchBar">
        <input type="text" placeholder="Busque por produtos aqui..." />
        <button>
          <AiOutlineSearch className="magnifyGlass" />
        </button>
      </div>
    </HeaderTag>
  );
};

export default HeaderUnlogged;
