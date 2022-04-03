import React from "react";
import { Link } from "react-router-dom";
import PhotoCarousel from "../Carousel/Carousel";
import { imagesCarousel } from "./ButtsProject/ButtsProject";
import { Box } from "@mui/system";
import { Container } from "@mui/material";
import cigarro1 from "../../assets/butts/cigarro1.jpg";

export default function Projects() {
  return (
    <Container>
      <Box component={"h2"} sx={{ fontSize: "h5.fontSize", color: "info.main" }}>Conocé nuestros proyectos</Box>
      <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
        <PhotoCarousel imagesURL={imagesCarousel} />
        <Box ml={10} sx={{ display: "flex", alignItems: "flex-start" }}>
          <img
            src={cigarro1}
            alt="Cigarrillo encendido"
            width={110}
            height={80}
            style={{ marginRight: 30 }}
          />
          <Link
            to="/colillas-de-cigarrillos"
            style={{ textDecoration: "none" }}
          >
            <Box component={"h2"}>
              Colillas de cigarrillos
            </Box>
          </Link>
        </Box>
      </Box>
    </Container>
  );
}
