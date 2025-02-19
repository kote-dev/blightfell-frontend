import { Routes, Route } from "react-router-dom";
import Play from "./components/Play";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<div>Home Page</div>} />
      <Route path="/play" element={<Play />} />
    </Routes>
  );
}

export default App;
