import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/system/Box";
import style from "./Footer.module.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsappOutlinedIcon from "@mui/icons-material/WhatsappOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import logo from "../../assets/logo.jpg";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img src={logo} alt="LOGO" width={50}/>

        <Box
          component="p"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <LocationOnOutlinedIcon sx={{ mr: 1, color: "primary.light" }} />{" "}
          Lincoln - Buenos aires
        </Box>
        <Box>
          <FacebookRoundedIcon color="primary" />
          <InstagramIcon sx={{ color: "secondary.light", mx: 3 }} />
          <a
            href="https://api.whatsapp.com/send?phone=542215698473"
            target="_blank"
            rel="noreferrer"
          >
            <WhatsappOutlinedIcon sx={{ color: "success.light" }} />
          </a>
        </Box>
      </Container>
    </footer>
  );
}
