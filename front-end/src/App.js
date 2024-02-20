import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About/About.js";
import NavBar from "./components/Home/NavBar.js";
import Home from "./components/Home/Index.js";
import Calculators from "./components/Calculators/index.js";
import Programs from "./components/Programs/index.js"

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/calculators" element={<Calculators />} />
        <Route path="/programs" element={<Programs />} />
      </Routes>
    </>
  );
}

export default App;
