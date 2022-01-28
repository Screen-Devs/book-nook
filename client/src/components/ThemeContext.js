import {
  createContext
} from "react";

export const themes = {
  dark: ".../dist/stylesDark.css",
  light: ".../dist/styles.css",
};


export const ThemeContext = createContext({
  theme: themes.light,
  changeTheme: () => {},
});