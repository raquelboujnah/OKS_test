import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./component/HomePage";
import PokeCard from "./component/PokeCard";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:name" element={<PokeCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;