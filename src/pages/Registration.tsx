import { createUserWithEmailAndPassword } from "firebase/auth";
import { FormEvent, useContext, useState } from "react";
import { auth } from "../services/firebase";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { Eye, EyeSlash } from "phosphor-react";

export const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [visibility, setVisibility] = useState(false);
  const [visibilityConfirm, setVisibilityConfirm] = useState(false);

  const navigate = useNavigate();

  const handleRegistration = async (e: FormEvent) => {
    e.preventDefault();
    if (password === "") {
      alert("A senha é obrigatório.");
    } else if (password.length < 7) {
      alert("A senha precisa ter no minimo 7 caracteres.");
    }
    if (confPassword === "") {
      alert("A confirmação da senha é obrigatório.");
    } else if (confPassword !== password) {
      alert("As senhas não conferem.");
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
        if (password === "") {
          console.log("A senha é obrigatório.");
        } else if (password.length < 7) {
          console.log("A senha precisa ter no minimo 7 caracteres.");
        } else if (confPassword === "") {
          console.log("A confirmação da senha é obrigatório.");
        } else if (confPassword !== password) {
          console.log("As senhas não conferem.");
        } else {
          alert("Aconteceu algum erro!! 😥  Tente novamente!");
        }
        setName("");
        setEmail("");
        setPassword("");
        setConfPassword("");
      });
  };

  const handleVisibility = () => {
    setVisibility(!visibility);
  };

  const handleVisibilityConfirm = () => {
    setVisibilityConfirm(!visibilityConfirm);
  };
  return (
    <div className="w-[320px]   md:w-2/5 m-auto bg-gray-800 mt-12  h-full rounded-lg shadow-2xl  flex flex-col p-6 mb-5">
      <h1 className="text-white text-2xl mt-6 text-center font-bold">
        Cadastro 👋
      </h1>
      <div className="flex flex-col items-center ">
        <div className="mb-10  mt-10">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Digite seu nome"
            className="rounded p-2 w-full text-white text-lg  mb-8 outline-none bg-transparent border-b-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            name="email"
            id="email"
            placeholder="Digite seu email"
            className="rounded p-2 w-full text-white text-lg shadow-lg mb-8 outline-none  bg-transparent border-b-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex gap-3">
            <input
              type={visibility ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Digite sua senha"
              className="rounded p-2 w-full text-white text-lg shadow-lg mb-8 outline-none  bg-transparent border-b-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleVisibility} className="text-white">
              {visibility ? <Eye size={28} /> : <EyeSlash size={28} />}
            </button>
          </div>
          <div className="flex gap-3">
            <input
              type={visibilityConfirm ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Confirme sua senha"
              className="rounded p-2 w-full text-white text-lg shadow-lg mb-8 outline-none  bg-transparent border-b-2"
              value={confPassword}
              onChange={(e) => setConfPassword(e.target.value)}
            />
            <button onClick={handleVisibilityConfirm} className="text-white">
              {visibilityConfirm ? <Eye size={28} /> : <EyeSlash size={28} />}
            </button>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <button
            className="bg-white w-40 p-2 rounded-md shadow-sm hover:bg-gray-200 transition-colors text-lg"
            onClick={handleRegistration}
          >
            Cadastrar
          </button>
          <Link to="/" className="hover:text-blue-900">
            Voltar
          </Link>
        </div>
      </div>
    </div>
  );
};
