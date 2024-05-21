import React, { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem("Users");
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Failed to parse auth user from localStorage", error);
      return null;
    }
  });

  useEffect(() => {
    try {
      if (authUser) {
        localStorage.setItem("Users", JSON.stringify(authUser));
      } else {
        localStorage.removeItem("Users");
      }
    } catch (error) {
      console.error("Failed to save auth user to localStorage", error);
    }
  }, [authUser]);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
