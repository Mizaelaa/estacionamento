import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Listagem from "./pages/Listagem";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cadastro />} />
        <Route path="/vagas" element={<Listagem />} />
      </Routes>
    </Router>
  );
}

export default App;