import { createContext, useState } from "react";
import { light } from "../styles/light";
import { dark } from "../styles/dark";
import React from "react";

interface IColorsProvider {
  children: React.ReactNode;
}

interface ITheme {
  title: string;
  colors: IColors;
}

interface IColors {
  divTituloModal: string;
  icons: string;
  placeholder: string;
  backgroundInput: string;
  logoColor: string;
  headerColor: string;
  textButton: string;
  textGeneral: string;
  backgroundGeneral: string;
  lightGreyBackground: string;
  lightGrey: string;
  grey: string;
  darkGrey: string;
  blue: string;
  lightGreen: string;
  green: string;
  greenOpacity: string;
  red: string;
  redOpacity: string;
  redSpan: string;
  orange: string;
}

interface IColorsContext {
  theme: ITheme;
  setTheme: React.Dispatch<React.SetStateAction<ITheme>>;
  toggleTheme(): void;
}

export const ColorsContext = createContext<IColorsContext>(
  {} as IColorsContext
);

export const ColorsProvider = ({ children }: IColorsProvider) => {
  const [theme, setTheme] = useState<ITheme>(light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ColorsContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ColorsContext.Provider>
  );
};
