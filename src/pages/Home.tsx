import { Input } from "../components/Login";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className=" w-[320px]   md:w-2/5 m-auto bg-gray-400 mt-12  h-full rounded-lg shadow-lg  flex flex-col p-6  ">
      <h1 className="text-white text-2xl mt-6 text-center font-bold">
        Faça seu Login 👋
      </h1>
      <Input />
      <div className="flex  gap-3 mt-6">
        <p>Não possui conta?</p>
        <Link to="/registration" className="hover:text-blue-900">
          Cadastre-se
        </Link>
      </div>
    </div>
  );
};
