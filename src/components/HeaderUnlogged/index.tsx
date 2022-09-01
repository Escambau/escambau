import { HeaderTag } from "./style";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Header = () => {
  //const navigate = useNavigate();
  return (
    <HeaderTag>
      <div className="container">
        <h1>Escambau</h1>
        <button
        //onClick={navigate("/login", { replace: true })}
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

export default Header;
