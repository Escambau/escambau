import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const creationError = () => {
  toast.error("Error", {
    autoClose: 2000,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
  });
};

export const creationSucess = () => {
  toast.success("sucess", {
    autoClose: 2000,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
  });
};

export const LoginError = () => {
  toast.error("Email ou senha incorretos!", {
    position: "top-right",
    hideProgressBar: false,
    autoClose: 2000,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
  });
};
export const LoginSucess = () => {
  toast.success("Login efetuado com sucesso!", {
    position: "top-right",
    hideProgressBar: false,
    autoClose: 2000,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: false,
  });
};

export const RegisterSucess = () => {
  toast.success("Conta criada com sucesso!", {
    position: "top-right",
    hideProgressBar: false,
    autoClose: 2000,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: false,
  });
};

export const RegisterError = () => {
  toast.error("Ops, algo deu errado!", {
    position: "top-right",
    hideProgressBar: false,
    autoClose: 2000,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
  });
};
