import { Box, Container } from "@mui/material";
import React from "react";
import WhatsappOutlinedIcon from "@mui/icons-material/WhatsappOutlined";

export default function joinUs() {
  return (
    <Container>
      <Box
        component={"h2"}
        sx={{ fontSize: "h2.fontSize", color: "info.main" }}
      >
        Sumate!
      </Box>
      <Box
        component={"h3"}
        sx={{ fontSize: "h5.fontSize", color: "info.main" }}
      >
        ¡Hay miles de maneras de colaborar!
      </Box>
      <Box component={"p"} sx={{ fontSize: "body1.fontSize", mb: 12 }}>
        Para concientizar a la sociedad y lograr un cambio de rumbo necesitamos
        de personas comprometidas. Sumate y sé parte de un camino conciente y
        responsable ambientalmente
      </Box>
      <Box component={"p"} sx={{ fontSize: "body2.fontSize" }}>
        Contactamos vía email: xxxx@gmail.com | ó a través de whatsapp:{" "}
        <a
          href="https://api.whatsapp.com/send?phone=542215698473"
          target="_blank"
          rel="noreferrer"
        >
          <WhatsappOutlinedIcon sx={{ color: "success.main" }} />
        </a>
      </Box>
    </Container>
  );
}
