import { HeaderTag } from "./style";
import { AiOutlineSearch } from "react-icons/ai";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

const HeaderUnlogged = () => {
  //const navigate = useNavigate();
  const {setIsModalLogin} = useContext(UserContext)
  return (
    <HeaderTag>
      <div className="container">
        <h1>Escambau</h1>
        <button
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
