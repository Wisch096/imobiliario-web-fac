import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../page/home";
import Cadastro from "../page/cadastro";
import Login from "../page/login";
import Blog from "../page/blog";
import PoliticaDePrivacidade from "../page/politicadeprivacidade";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/politicadeprivacidade" element={<PoliticaDePrivacidade />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

