import "./App.css";
import GlobalStyle from "./styles/global";
import { ToastContainer } from "react-toastify";
import { EscambauRoutes } from "./routes";
import { LoginModal } from "./components/LoginModal";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ToastContainer />
      <EscambauRoutes />
      <LoginModal />
    </div>
  );
}

export default App;
