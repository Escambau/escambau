import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import api from "../services/api";
import {
  LoginError,
  RegisterSucess,
  RegisterError,
  LoginSucess,
} from "../ToastContainer";

interface IUserProviders {
  children: ReactNode;
}

interface IUserContext {
  user: null | IUser;
  setUser: Dispatch<SetStateAction<null | IUser>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  isPasswordShow: boolean;
  setIsPasswordShow: Dispatch<SetStateAction<boolean>>;
  navigate: NavigateFunction;
  viewPass: () => void;
  redirectToRegister: () => void;
  onSubmitLogin: (data: ILogin) => void;
  onSubmitRegister: (data: IRegister) => void;
  isModalLogin: boolean;
  setIsModalLogin: Dispatch<SetStateAction<boolean>>;
  redirectToProfile: () => void;
  isDropdownModal: boolean;
  setIsDropdownModal: Dispatch<SetStateAction<boolean>>;
  logOut: () => void;
}

export interface IUser {
  email: string;
  name: string;
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
  const [user, setUser] = useState<null | IUser>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPasswordShow, setIsPasswordShow] = useState<boolean>(false);
  const [isModalLogin, setIsModalLogin] = useState<boolean>(false);
  const [isDropdownModal, setIsDropdownModal] = useState<boolean>(false);
  const navigate = useNavigate();

  const viewPass = () => {
    setIsPasswordShow(!isPasswordShow);
  };
  const redirectToRegister = () => {
    navigate("/register", { replace: true });
    setIsModalLogin(false);
  };
  const onSubmitLogin = (data: ILogin) => {
    api
      .post("/login", data)
      .then((response) => {
        localStorage.setItem("@token", response.data.accessToken);
        localStorage.setItem("@id", response.data.user.id);
        setUser(response.data.user);
        LoginSucess()
        setTimeout(() => {
          navigate("/", { replace: true });
        }, 3000);
        setIsModalLogin(false);
      })
      .catch((er) => {
        LoginError();
        navigate("/", { replace: true });
      });
  };
  const onSubmitRegister = (data: IRegister) => {
    api
      .post<IRegisterResponse>("/users", data)
      .then((res) => {
        if (res.data) {
          RegisterSucess();
          setTimeout(() => {
            navigate("/", { replace: true });
            setIsModalLogin(true);
          }, 3000);
        }
      })
      .catch((err) => {
        RegisterError();
      });
  };
  const redirectToProfile = () => {
    navigate("/profile", { replace: true });
  };

  useEffect(() => {
    const loadUser = async () => {
      const tokenResponse = localStorage.getItem("@token");
      const idResponse = localStorage.getItem("@id");

      if (tokenResponse) {
        try {
          const { data } = await api.get(`/users/${idResponse}`);

          setUser(data);
        } catch (error) {
          console.error(error);
        }
      }
      setIsLoading(false);
    };
    loadUser();
  }, []);

  const logOut = () => {
    localStorage.removeItem("@token");
    navigate("/");
    window.location.reload();
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isLoading,
        setIsLoading,
        isPasswordShow,
        setIsPasswordShow,
        viewPass,
        redirectToRegister,
        onSubmitLogin,
        navigate,
        onSubmitRegister,
        isModalLogin,
        setIsModalLogin,
        redirectToProfile,
        isDropdownModal,
        setIsDropdownModal,
        logOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
