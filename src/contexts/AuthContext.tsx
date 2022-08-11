import { createContext, ReactNode, useState } from "react";
import { User } from "../types/User";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextData {}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}
