import React from "react";
import { withScriptjs, withGoogleMap } from "react-google-maps";
import Map from "./Map";
import cigarro1 from "../../../assets/butts/cigarro1.jpg";
import cigarro2 from "../../../assets/butts/cigarro2.jpg";
import lincoln from "../../../assets/butts/lincoln.jpg";
import salvemosAlPlaneta from "../../../assets/butts/salvemosAlPlaneta.jpg";

export const imagesCarousel = [cigarro1, cigarro2, lincoln, salvemosAlPlaneta];

export default function ButtsProject() {
  const WrappedMap = withScriptjs(withGoogleMap(Map));
  return (
    <div>
      <h2>Campaña de concientización y recolección</h2>
      <span>Descargá el proyecto aquí</span>
      <p>
        Hoy en día las colillas de cigarillo generan miles de toneladas anuales
        de basura y junto a ellas, todas las sustancias tóxicas que quedan
        retenidas en los filtros. Gran parte de las colillas son arrojadas al
        suelo incorporandosé y liberando los tóxicos al medio ambiente. Además,
        el principal material que las compone (acetato de celulosa) es un
        plástico que tarda más de 10 años en degradarse.
      </p>

      <span>¡Algunos datos!:</span>
      <ul>
        <li>Una sola colilla puede contaminar hasta 50 litros de agua dulce</li>
        <li>
          Cuando las colillas se incorporan a los cuerpos de agua, los animales
          suelen confundirla con comida e ingerirla, produciendo así el desceso
          de aves, peces y mamíferos
        </li>
        <li>En Argentina se fuman 1176 cigarrillos por persona, por años</li>
        <li>
          De los mas de 7000 tóxicos que contiene el humo del cigarrilo, unas 70
          son sustancias cancerígenas (entre los principales se encuentra el
          arsénico, benceno, berílio, cadmio, polonio 210)
        </li>
      </ul>

      <h3>Objetivos del proyecto:</h3>
      <ul>
        <li>
          Concientizar a la sociedad acerca del impacto que generan las colillas
          de cigarrillo y cuales son los caudales de desechos al cual nos
          enfrentamos
        </li>
        <li>Dotar a la sociedad de puntos de recolección de colillas </li>
        <li>
          Reducir la peligrosidad de las mismas mediante tratamientos adecuados
        </li>
      </ul>
      <span>Puntos de recolección:</span>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.MAP_API_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
