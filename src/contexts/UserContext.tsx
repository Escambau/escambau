import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import api from "../services/api";
import { LoginError, RegisterSucess, RegisterError, LoginSucess } from "../ToastContainer";

interface IUserProviders {
  children: ReactNode;
}
interface IUserContext {
  user: null | IUser;
  setUser: Dispatch<SetStateAction<null>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  token: null | string;
  setToken: Dispatch<SetStateAction<null>>;
  isPasswordShow: boolean;
  setIsPasswordShow: Dispatch<SetStateAction<boolean>>;
  navigate: NavigateFunction;
  viewPass: () => void;
  redirectToRegister: () => void;
  onSubmitLogin: (data: ILogin) => void;
  onSubmitRegister: (data: IRegister) => void;
}
interface IUser {
  email: string;
  id: number;
  avatarUrl: string;
  cidade: string;
  estado: string;
  cpf: string;
  idade: number;
}
export interface ILogin {
  email: string;
  password: string;
}
export interface IRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  avatarUrl: string;
  cidade: string;
  estado: string;
  cpf: string;
  idade: number;
}
interface IRegisterResponse {
  acessToken: string;
  user: IUser;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export function UserProvider({ children }: IUserProviders) {
  const [user, setUser] = useState<null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [token, setToken] = useState<null>(null);
  const [isPasswordShow, setIsPasswordShow] = useState<boolean>(false);
  const navigate = useNavigate();

  const viewPass = () => {
    setIsPasswordShow(!isPasswordShow);
  };
  const redirectToRegister = () => {
    navigate("/register", { replace: true });
  };
  const onSubmitLogin = (data: ILogin) => {
    api
      .post("/login", data)
      .then((response) => {
        localStorage.setItem("@token", response.data.token);
        localStorage.setItem("@id", response.data.user.id);
        setUser(response.data.user);
        setToken(response.data.token);
        LoginSucess();
        setTimeout(() => {
          navigate("/dashboard", { replace: true });
        }, 3000);
      })
      .catch((er) => {
        console.log(er);
        LoginError();
        navigate("/home", { replace: true });
      });
  };
  const onSubmitRegister = (data: IRegister) => {
    api
      .post<IRegisterResponse>("/users", data)
      .then((res) => {
        if (res.data) {
          RegisterSucess();
          setTimeout(() => {
            navigate("/login", { replace: true });
          }, 3000);
        }
      })
      .catch((err) => {
        console.log(err);
        RegisterError();
      });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isLoading,
        setIsLoading,
        token,
        setToken,
        isPasswordShow,
        setIsPasswordShow,
        viewPass,
        redirectToRegister,
        onSubmitLogin,
        navigate,
        onSubmitRegister,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
