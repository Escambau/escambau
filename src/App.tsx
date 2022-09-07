import GlobalStyle from "./styles/global";
import { ToastContainer } from "react-toastify";
import { EscambauRoutes } from "./routes";
import { ThemeProvider } from "styled-components";
import { useContext } from "react";
import { ColorsContext } from "./contexts/ColorsContext";

function App() {
  const { theme } = useContext(ColorsContext);
  console.log(theme);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ToastContainer />
      <EscambauRoutes />
    </ThemeProvider>
  );
}

export default App;
