import { FC, createContext, useState } from "react";
type Theme = "doctor" | "patient";
type ThemeContext = { theme: Theme; changeTheme: (t: string) => void };

export const ThemeContext = createContext<ThemeContext>({} as ThemeContext);

interface Props {
  children: React.ReactNode;
}

export const ThemeProvider: FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("doctor");
  const changeTheme = (t: string) => {
    if (theme != t) {
      setTheme(theme === "doctor" ? "patient" : "doctor");
    }
  };

  const color = theme === "doctor" ? "rgba(255, 255, 255, 0.87)" : "#213547";
  const backgroundColor = theme === "doctor" ? "#242424" : "gray";

  document.body.style.color = color;
  document.body.style.backgroundColor = backgroundColor;

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
