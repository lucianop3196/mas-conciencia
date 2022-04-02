import React from "react";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";

export default function Footer() {
  return (
    <footer>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
        positions={{ bottom: "0px" }}
      >
        <h3>Más Conciencia (LOGO)</h3>
        <p> Contactanos - Tel: +542355-521097 </p>
        <Box>
          <p>Localidad de Lincoln</p>
          <p>Buenos Aires</p>
        </Box>
        <p>Poner íconos de redes sociales</p>
      </Container>
    </footer>
  );
}
