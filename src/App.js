import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import JoinUs from "./components/JoinUs/JoinUs";
import Navbar from "./components/Navbar/Navbar";
import ButtsProject from "./components/Projects/ButtsProject/ButtsProject";
import Footer from "./components/Footer/Footer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import useMediaQuery from '@mui/material/useMediaQuery';

function App() {

  const matches = useMediaQuery('(min-width:600px)')
  
  const theme = createTheme({
    //Personalizamos el objeto global de estilos de material UI
      typography: {
      fontFamily: "Nunito",
      h1: {
        fontSize: `${matches && "6rem"}`,
      },
      h2: {
        fontSize: `${matches && "5rem"}`,
      },
      h3: {
        fontSize: "4rem",
      },
      h4: {
        fontSize: "3rem",
      },
      h5: {
        fontSize: `${matches ? "2.5rem" : "1.3rem"}`,
      },
      h6: {
        fontSize: "2rem",
      },
      body1: {
        fontSize: `${matches ? "1.5rem" : "1rem"}`,
      },
      body2: {
        fontSize: "1.25rem",
      },
    },
    palette: {
      action: {
        hover: "rgba(0,0,0, 0.40)",
        focus: "rgba(0,0,0, 0.40)",
      },
    },
  });
  
  return (
    <div>
      <ThemeProvider  theme={theme}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/proyectos" element={<Projects matches={matches} />} />
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
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
