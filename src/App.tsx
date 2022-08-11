import { Home } from "./pages/Home";
import { Private } from "./pages/Private";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Registration } from "./pages/Registration";
import { AuthProvider } from "./contexts/AuthContext";

export function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/private" element={<Private />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}
