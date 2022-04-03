import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";

const pages = [
  { title: "Inicio", route: "/" },
  { title: "Sobre Nosotros", route: "/sobre-nosotros" },
  { title: "Proyectos", route: "/proyectos" },
  { title: "Sumate", route: "/sumate" },
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [active, setActive] = React.useState("/");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              color: "primary.main",
            }}
          >
            <img src={logo} alt="LOGO" width={50} />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages?.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Link to={page.route} style={{ textDecoration: "none" }}>
                    <Typography
                      textAlign="center"
                      sx={{
                        my: 2,
                        display: "block",
                        mx: 4,
                        color: "palette.primary.dark",
                        fontWeight: "1000",
                        "&:hover": {
                          color: "action.hover",
                        },
                      }}
                    >
                      {page.title}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              color: "primary.main",
            }}
          >
            <img src={logo} alt="LOGO" width={50} />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "center" },
            }}
          >
            {pages?.map((page) => (
              <Link
                key={page.title}
                to={page.route}
                style={{ textDecoration: "none" }}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    display: "block",
                    mx: 4,
                    color: "palette.primary.dark",
                    fontWeight: "1000",
                    "&:hover": {
                      color: "action.hover",
                    },
                    "&:focus": {
                      color: "action.focus",
                    },
                  }}
                >
                  {page.title}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
