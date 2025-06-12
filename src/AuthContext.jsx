import { createContext, useContext, useState } from "react";

import React from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const token = user?.token;

  return (
    <AuthContext.Provider value={{ user, setUser, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);