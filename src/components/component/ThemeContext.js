import { createContext } from "react";
export const ThemeContext = createContext("Light");

export const ThemeContextProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value="light">{children}</ThemeContext.Provider>
  );
};
