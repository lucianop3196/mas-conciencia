import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import JoinUs from "./components/JoinUs/JoinUs";
import Navbar from "./components/Navbar/Navbar";
import ButtsProject from "./components/Projects/ButtsProject/ButtsProject";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/proyectos" element={<Projects />} />
        <Route exact path="/sobre-nosotros" element={<About />} />
        <Route exact path="/sumate" element={<JoinUs />} />
        <Route
          exact
          path="/colillas-de-cigarrillos"
          element={<ButtsProject />}
        />

        {/* Cuando ninguna otra ruta cargue, se renderizará la ruta debajo */}
        <Route path="*" element={<main>Page Not Found</main>} />
      </Routes>
    </div>
  );
}

export default App;
