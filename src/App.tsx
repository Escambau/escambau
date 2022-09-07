import { ToastContainer } from "react-toastify";
import { EscambauRoutes } from "./routes";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import { light } from "./styles/light";

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <ToastContainer />
      <EscambauRoutes />
    </ThemeProvider>
  );
}

export default App;
