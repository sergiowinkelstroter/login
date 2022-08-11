import { signInWithEmailAndPassword } from "firebase/auth";
import { FormEvent, useState } from "react";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";
import { User } from "../types/User";

export const Input = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
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

  return (
    <div className="">
      <form onSubmit={handleLogin} className=" flex flex-col items-center ">
        <div className="mb-10  mt-6">
          <label htmlFor="email" className="text-xl text-gray-800">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Digite seu email..."
            className="rounded p-2 w-full text-lg shadow-lg mb-8 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password" className="text-xl text-gray-800">
            Senha
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Digite sua senha"
            className="rounded p-2 w-full text-lg shadow-lg outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="bg-white w-40 p-2 rounded-md shadow-sm hover:bg-gray-200 transition-colors text-lg">
          Entrar
        </button>
      </form>
    </div>
  );
};
