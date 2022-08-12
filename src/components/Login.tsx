import { Eye, EyeSlash } from "phosphor-react";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const Login = () => {
  const [visibility, setVisibility] = useState(false);
  const {
    handleLogin,
    email,
    password,
    handleChangeEmail,
    handleChangePassword,
  } = useContext(AuthContext);

  const handleVisibility = () => {
    setVisibility(!visibility);
  };

  return (
    <div className="">
      <div className=" flex flex-col items-center ">
        <div className="mb-10  mt-6">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Digite seu email"
            className=" p-2 w-full text-white text-lg border-b-2 mb-8 outline-none bg-transparent  rounded-sm"
            value={email}
            onChange={(e) => handleChangeEmail(e)}
          />

          <div className="flex gap-3">
            <input
              type={visibility ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Digite sua senha"
              className=" p-2 w-full text-lg text-white border-b-2 outline-none bg-transparent rounded-sm"
              value={password}
              onChange={(e) => handleChangePassword(e)}
            />
            <button onClick={handleVisibility} className="text-white">
              {visibility ? <Eye size={28} /> : <EyeSlash size={28} />}
            </button>
          </div>
        </div>
        <button
          className="bg-white w-40 p-2 rounded-md shadow-sm hover:bg-gray-200 transition-colors text-lg"
          onClick={handleLogin}
        >
          Entrar
        </button>
      </div>
    </div>
  );
};
