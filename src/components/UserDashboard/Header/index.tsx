import { HeaderTag } from "./style";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { ImUser } from "react-icons/im";

const Header = () => {
  return (
    <HeaderTag>
      <div className="container">
        <h1>Escambau</h1>

        <section className="notification-perfil">
          <button>
            <IoMdNotificationsOutline className="notification" />
          </button>
          <button>
            <ImUser className="perfil" />
            {window.innerWidth > 764 && (
              <h3 className="userName">Allan Salatino</h3>
            )}
          </button>
        </section>
      </div>

      <div className="searchBar">
        <input type="text" placeholder="Busque por produtos aqui..." />
        <button>
          <AiOutlineSearch className="magnifyGlass"/>
        </button>
      </div>
    </HeaderTag>
  );
};

export default Header;
