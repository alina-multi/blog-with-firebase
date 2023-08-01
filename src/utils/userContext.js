import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "../firebase";

const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const currentUser = useAuth();

  return (
    <UserContext.Provider value={{ currentUser }}>
      {children}
    </UserContext.Provider>
  );
};


