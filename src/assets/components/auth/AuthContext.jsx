import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (email, password) => {
    if (email === "chylah11st@gmail.com" && password === "1126") {
      setIsLoggedIn(true);
      return { success: true };
    } else {
      return { success: false, message: "Invalid email or password" };
    }
  };

  const logout = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);