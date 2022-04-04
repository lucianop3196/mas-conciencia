import React from "react";
import { Link } from "react-router-dom";
import PhotoCarousel from "../Carousel/Carousel";
import { imagesCarousel } from "./ButtsProject/ButtsProject";
import { Box } from "@mui/system";
import { Container } from "@mui/material";
import cigarro1 from "../../assets/butts/cigarro1.jpg";
import style from "./Projects.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Fade from "react-reveal/Fade";

export default function Projects() {
  return (
    <Container>
      <Box
        component={"h2"}
        sx={{ fontSize: "h5.fontSize", color: "info.main" }}
      >
        Conocé nuestros proyectos
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
        <PhotoCarousel imagesURL={imagesCarousel} />

        {/* Proyectos: */}
        <Fade bottom={true}>
          <Link
            to="/colillas-de-cigarrillos"
            className={`${style.project__Link}`}
          >
            <img
              src={cigarro1}
              alt="Cigarrillo encendido"
              width={110}
              height={80}
              style={{ marginRight: 30 }}
            />
            <Box>
              <Box component={"h2"} sx={{ color: "#252525", mb: 1 }}>
                Colillas de cigarrillos
              </Box>
              <Box
                component={"p"}
                sx={{ fontSize: 13, color: "#252525", mt: 0 }}
              >
                Proyecto de concientización, recolección y tratamiento de
                colillas de cigarrillos
              </Box>
            </Box>
            <ArrowForwardIosIcon sx={{ color: "#dedede", ml: 8 }} />
          </Link>
        </Fade>
      </Box>
    </Container>
  );
}
