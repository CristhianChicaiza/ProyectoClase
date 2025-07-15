import { ReactNode, useState, createContext, useContext } from "react";

//un tipo de puede poner dentro de una interface
type Theme = "light" | "dark" | "especial"; // Define the type for the theme

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        className={
          theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
        }
      >
        El tema que se usa es {theme}
      </div>

      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  return context || { theme: "dark", toggleTheme: () => {} }; // Default values if context is undefined
};

export default ThemeContext;