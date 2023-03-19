import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../page/home";
import Cadastro from "../page/cadastro";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

