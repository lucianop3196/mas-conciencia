import React from "react";
import { withScriptjs, withGoogleMap } from "react-google-maps";
import Map from "./Map";
import cigarro1 from "../../../assets/butts/cigarro1.jpg";
import cigarro2 from "../../../assets/butts/cigarro2.jpg";
import lincoln from "../../../assets/butts/lincoln.jpg";
import salvemosAlPlaneta from "../../../assets/butts/salvemosAlPlaneta.jpg";
import pdf from "../../../assets/butts/proyectoColillas.pdf";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Fade from "react-reveal/Fade";

export const imagesCarousel = [cigarro1, cigarro2, lincoln, salvemosAlPlaneta];

export default function ButtsProject() {
  const WrappedMap = withScriptjs(withGoogleMap(Map));
  return (
    <Container
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 3,
        gridTemplateRows: "auto",
        gridTemplateAreas: `"title title title title"
          "body1 body1 body1 body1"
          "datos datos obj obj"
          "points points . download"
          "map map map map"
          "footer footer footer footer"`,
      }}
    >
      <Box
        component="h2"
        sx={{ typography: "h4", color: "primary.main", gridArea: "title", my:10 }}
      >
        Campaña de concientización y recolección
      </Box>

      <Box
        component="p"
        sx={{
          typography: "body1",
          mx: 13,
          mb: 15,
          gridArea: "body1",
          lineHeight: 1.8,
        }}
      >
        Hoy en día las colillas de cigarillo generan miles de toneladas anuales
        de basura y junto a ellas, todas las sustancias tóxicas que quedan
        retenidas en los filtros. Gran parte de las colillas son arrojadas al
        suelo incorporandosé y liberando los tóxicos al medio ambiente. Además,
        el principal material que las compone (acetato de celulosa) es un
        plástico que tarda más de 10 años en degradarse.
      </Box>

      <Box component="div" sx={{ typography: "body2", gridArea: "datos" }}>
        <Fade left={true} duration={1700}>
          <Paper elevation={6}>
            <Box component="h3" sx={{ m: 3, pt: 3 }}>
              ¡Algunos datos!:
            </Box>
            <Box component="ul" sx={{ m: 5, pb: 3 }}>
              <li>
                Una sola colilla puede contaminar hasta 50 litros de agua dulce
              </li>
              <li>
                Cuando las colillas se incorporan a los cuerpos de agua, los
                animales suelen confundirla con comida e ingerirla, produciendo
                así el desceso de aves, peces y mamíferos
              </li>
              <li>
                En Argentina se fuman 1176 cigarrillos por persona, por años
              </li>
              <li>
                De los mas de 7000 tóxicos que contiene el humo del cigarrilo,
                unas 70 son sustancias cancerígenas (entre los principales se
                encuentra el arsénico, benceno, berílio, cadmio, polonio 210)
              </li>
            </Box>
          </Paper>
        </Fade>
      </Box>

      <Box component="div" sx={{ typography: "body2", gridArea: "obj" }}>
        <Fade right={true} duration={1700}>
          <Paper elevation={6}>
            <Box component="h3" sx={{ m: 3, pt: 3 }}>
              Objetivos del proyecto:
            </Box>
            <Box component="ul" sx={{ m: 5, pb: 3 }}>
              <li>
                Concientizar a la sociedad acerca del impacto que generan las
                colillas de cigarrillo y cuales son los caudales de desechos al
                cual nos enfrentamos
              </li>
              <li>Dotar a la sociedad de puntos de recolección de colillas </li>
              <li>
                Reducir la peligrosidad de las mismas mediante tratamientos
                adecuados
              </li>
            </Box>
          </Paper>
        </Fade>
      </Box>
      <Box sx={{ typography: "body2", gridArea: "points" }}>
        <Fade duration={1700}>Puntos de recolección:</Fade>
      </Box>
      <Box component="span" sx={{ typography: "body2", gridArea: "download" }}>
        <Fade right={true} duration={1700}>
          <Button variant="outlined">
            <a
              href={pdf}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              Descargá el proyecto aquí
            </a>
          </Button>
        </Fade>
      </Box>
      <Box sx={{ gridArea: "map", mb: 10 }}>
        <Fade bottom duration={1700}>
          <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD51Ca4miCEErHx-Y9kmn6HQdnu8SIUnq0`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </Fade>
      </Box>
    </Container>
  );
}
