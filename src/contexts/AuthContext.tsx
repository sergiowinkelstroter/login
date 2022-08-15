import { createContext, ReactNode, useEffect } from "react";

import {
  browserSessionPersistence,
  signInWithEmailAndPassword,
  User,
} from "firebase/auth";
import { FormEvent, useState } from "react";
import { auth } from "../services/firebase";
import { Link, useNavigate } from "react-router-dom";

interface AuthProviderProps {
  children: ReactNode;
}
let data: User;

interface AuthContextData {
  handleLogin: (e: FormEvent) => Promise<void>;
  email: string;
  password: string | number;
  handleChangeEmail: (e: any) => void;
  handleChangePassword: (e: any) => void;
  data: User;
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
        data = user;
        navigate("/private");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        alert(`
                Aconteceu algum erro!! 😥 
                Você ja se cadastrou? 🤔
    `);
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
        data,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
