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
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  AD_URL,
  ADMIN_DEVICES_URL,
  DEVICES_URL,
  LOGIN_URL,
  MEDIA_URL,
  TIMETABLE_URL,
  USERS_URL,
} from "../../navigation/routes";
import { ROLE_ID, TOKEN } from "../../constans/localStorage";

const userPages = [
  { name: "Список рекламы", path: AD_URL },
  { name: "Расписание", path: TIMETABLE_URL },
  { name: "Список устройств", path: DEVICES_URL },
];

const adminPages = [
  { name: "Пользователи", path: USERS_URL },
  { name: "Медиа-сервер", path: MEDIA_URL },
  { name: "Устройства", path: ADMIN_DEVICES_URL },
];

const Header = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem(TOKEN)) {
      navigate(LOGIN_URL);
    }
  });

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleGoPage = (path) => {
    navigate(path);
  };

  const pages = localStorage.getItem(ROLE_ID) === "2" ? adminPages : userPages;

  const handleExit = () => {
    localStorage.removeItem(ROLE_ID);
    localStorage.removeItem(TOKEN);
    navigate(LOGIN_URL);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#3e403f" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Billboards
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
                {pages.map((page, index) => (
                  <MenuItem key={index} onClick={() => handleGoPage(page.path)}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Billboards
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page, index) => (
                <Button
                  key={index}
                  onClick={() => handleGoPage(page.path)}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
            <Button variant="contained" color="error" onClick={handleExit}>
              Выход
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
