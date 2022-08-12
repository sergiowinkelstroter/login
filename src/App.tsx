import { Home } from "./pages/Home";
import { Private } from "./pages/Private";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Registration } from "./pages/Registration";

export function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/private" element={<Private />} />
      </Routes>
    </div>
  );
}
