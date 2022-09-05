import "./App.css";
import GlobalStyle from "./styles/global";
import { ToastContainer } from "react-toastify";
import { EscambauRoutes } from "./routes";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ToastContainer />
      <EscambauRoutes />
    </div>
  );
}

export default App;
