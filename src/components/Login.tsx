import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const Login = () => {
  const {
    handleLogin,
    email,
    password,
    handleChangeEmail,
    handleChangePassword,
  } = useContext(AuthContext);

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
            onChange={(e) => handleChangeEmail(e)}
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
            onChange={(e) => handleChangePassword(e)}
          />
        </div>
        <button className="bg-white w-40 p-2 rounded-md shadow-sm hover:bg-gray-200 transition-colors text-lg">
          Entrar
        </button>
      </form>
    </div>
  );
};
