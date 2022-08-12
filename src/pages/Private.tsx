import { auth } from "../services/firebase";
import { signOut } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const Private = () => {
  const navigate = useNavigate();
  const { email } = useContext(AuthContext);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  if (email === "") {
    return <Navigate to="/" />;
  }

  return (
    <div className="text-center text-white">
      <h1>PAGE Private</h1>
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
};
