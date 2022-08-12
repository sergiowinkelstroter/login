import { createContext, ReactNode, useEffect } from "react";
import { User } from "../types/User";
import {
  browserSessionPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { FormEvent, useState } from "react";
import { auth } from "../services/firebase";
import { Link, useNavigate } from "react-router-dom";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextData {
  handleLogin: (e: FormEvent) => Promise<void>;
  email: string;
  password: string | number;
  handleChangeEmail: (e: any) => void;
  handleChangePassword: (e: any) => void;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    await auth.setPersistence(browserSessionPersistence).then(() => {
      return signInWithEmailAndPassword(auth, email, password);
    });
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        navigate("/private");
      })
      .catch((error) => {
        alert(`
    Aconteceu algum erro!! 😥 
    Você ja se cadastrou? 🤔
    `);
        setEmail("");
        setPassword("");
      });
  };

  function handleChangeEmail(e: any) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e: any) {
    setPassword(e.target.value);
  }

  return (
    <AuthContext.Provider
      value={{
        handleLogin,
        email,
        password,
        handleChangeEmail,
        handleChangePassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
