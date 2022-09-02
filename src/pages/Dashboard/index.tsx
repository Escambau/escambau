import { useContext } from "react";
import Categorys from "../../components/Categorys";
import HeaderUnlogged from "../../components/HeaderUnlogged";
import ListDashboard from "../../components/ListDashboard";
import Header from "../../components/UserDashboard/Header";
import { MainTag } from "../../components/UserDashboard/Main/style";
import { UserContext } from "../../contexts/UserContext";

const Dashboard = () => {
  const {user} = useContext(UserContext);
  return(
    <>
      {user ? 
        <Header />
        :
        <HeaderUnlogged/>
      }
      <MainTag>
        <div className="container">
          <Categorys />
          <ListDashboard />
        </div>
      </MainTag>
    </>
  )
};

export default Dashboard;

