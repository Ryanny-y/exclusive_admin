import { createContext, useState } from "react";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [ userData, setUserData ]= useState(null);
  const [ isAuthenticated, setIsAuthenticated ] = useState(false);
  const backend_uri = import.meta.env.VITE_DB_URI;

  const value = {
    userData, setUserData, 
    isAuthenticated, setIsAuthenticated,
    backend_uri
  };

  return (
    <AuthContext.Provider value={value}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthProvider