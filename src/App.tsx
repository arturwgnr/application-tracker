import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import Applications from "./pages/Applications";
import Stats from "./pages/Stats"; // cria esse arquivo vazio primeiro
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* rota inicial */}
        <Route path="/" element={<LandingPage />} />

       
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="applications" element={<Applications />} />
          <Route path="stats" element={<Stats />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
