import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

interface IUserProviders {
  children: ReactNode;
}
interface IUserContext {
  user: IUser | null;
  setUser: Dispatch<SetStateAction<null>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  token: null;
  setToken: Dispatch<SetStateAction<null>>;
  isPasswordShow: boolean;
  setIsPasswordShow: Dispatch<SetStateAction<boolean>>;

  viewPass: () => void;
}

interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  avatarUrl: string;
  cidade: string;
  estado: string;
  cpf: string;
  idade: number;
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

  const viewPass = () => {
    setIsPasswordShow(!isPasswordShow);
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
