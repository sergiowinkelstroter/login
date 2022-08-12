import { createUserWithEmailAndPassword } from "firebase/auth";
import { FormEvent, useContext, useState } from "react";
import { auth } from "../services/firebase";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegistration = async (e: FormEvent) => {
    e.preventDefault();
    if (password === "") {
      alert("A senha é obrigatório.");
    } else if (password.length < 7) {
      alert("A senha precisa ter no minimo 7 caracteres.");
    }
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        setName("");
        setEmail("");
        setPassword("");
        navigate("/");
      })
      .catch((error) => {
        alert("Aconteceu algum erro!! 😥  Tente novamente!");
        setName("");
        setEmail("");
        setPassword("");
      });
  };
  return (
    <div className="w-[320px]   md:w-2/5 m-auto bg-gray-400 mt-12  h-full rounded-lg shadow-lg  flex flex-col p-6">
      <form
        onSubmit={handleRegistration}
        className="flex flex-col items-center "
      >
        <div className="mb-10  mt-10">
          <label htmlFor="text" className="text-xl text-gray-800">
            Nome
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Digite seu nome..."
            className="rounded p-2 w-full text-lg shadow-lg mb-8 outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
            placeholder="Digite seu email..."
            className="rounded p-2 w-full text-lg shadow-lg mb-8 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex gap-4 items-center">
          <button className="bg-white w-40 p-2 rounded-md shadow-sm hover:bg-gray-200 transition-colors text-lg">
            Cadastrar
          </button>
          <Link to="/" className="hover:text-blue-900">
            Voltar
          </Link>
        </div>
      </form>
    </div>
  );
};
