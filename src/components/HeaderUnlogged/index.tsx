import { HeaderTag } from "./style";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotificationsActive } from "react-icons/md";
import { ImUser } from "react-icons/im";

const HeaderUnlogged = () => {
  return (
    <HeaderTag>
      <div className="container">
        <div className="logotipo">
          <h1>Escambau</h1>
        </div>

        <section className="notification-perfil">
          <button>
            <MdNotificationsActive className="notification" />
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
          <AiOutlineSearch />
        </button>
      </div>
    </HeaderTag>
  );
};

export default HeaderUnlogged;
