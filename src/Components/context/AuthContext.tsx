import {
  createContext,
  
  useContext,
  useEffect,
  useState,
} from "react";

interface AuthContextType {
  token: string | null;
  error: string | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  role: string | null;
  userId: string | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
  const [error, setError] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(localStorage.getItem('userId'));
  const [role, setRole] = useState<string | null>(localStorage.getItem('role'));

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!token);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Puedes agregar aquí funciones auxiliares si las necesitas en el futuro.

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://user-api-production-a2cb.up.railway.app/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "reqres-free-v1",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) throw new Error("Error al Loguear");
      const data = await response.json();
      setToken(data.token);

      
      setUserId(data.id); 
      setRole(data.role);
      setIsLoggedIn(true);
      
      // Guardar en localStorage
      localStorage.setItem('token', data.token);
      localStorage.setItem('userId', data.id);
      localStorage.setItem('role', data.role);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setToken(null);
    setError(null);
    setUserId(null);
    setRole(null);
    setIsLoading(false);
    setIsLoggedIn(false);
    
    // Limpiar localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('role');
  };

  useEffect(() => {
    console.log("Token actualizado:", token);
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, error, isLoggedIn, isLoading, role, login, logout, userId }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  return context || {} as AuthContextType;
};
