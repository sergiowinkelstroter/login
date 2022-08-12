import { auth } from "../services/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const Private = () => {
  const navigate = useNavigate();
  const { email, password } = useContext(AuthContext);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  if (email === "") {
    return null;
  }

  return (
    <div>
      <h1>Private</h1>
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
};
