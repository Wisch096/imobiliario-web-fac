import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../page/home";
import Cadastro from "../page/cadastro";
import Login from "../page/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

