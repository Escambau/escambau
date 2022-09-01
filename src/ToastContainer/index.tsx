import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { MdErrorOutline } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";

export const creationError = () => {
  toast.error("Error", {
    icon: <MdErrorOutline />,
    autoClose: 2000,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
  });
};

export const creationSucess = () => {
  toast.success("sucess", {
    icon: <AiFillCheckCircle />,
    autoClose: 2000,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
  });
};

export const LoginError = () => {
  toast.error("E-mail e/ou senha incorretos!", {
    icon: <MdErrorOutline />,
    autoClose: 2000,
    closeOnClick: false,
    pauseOnHover: false,
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
