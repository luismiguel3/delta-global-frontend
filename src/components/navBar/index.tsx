import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import LogoutIcon from "@mui/icons-material/Logout";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { LeftNavMobile } from "./mobile";
import { useModalsDashboardStore } from "../../context/useModalsDashboardStore";
import useNavBar from "../../hooks/useNavBar";

function ResponsiveAppBar() {
  const pages = ["Cadastrar"];
  const { anchorElUser, handleOpenUserMenu, handleCloseUserMenu } = useNavBar();
  const { setCreateEditOpen } = useModalsDashboardStore();

  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}>
            <img
              src="https://www.deltaglobal.com.br/assets/nova_home/img/deltaGlobal-deltagrupo-logo-color.svg"
              alt="logo"
              style={{ width: "120px" }}
            />
          </Typography>

          <LeftNavMobile pages={pages} />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={() => {
                setCreateEditOpen(true);
                console.log("clicou");
              }}
              sx={{
                my: 2,
                color: "#000",
                display: "block",
                ml: 5,
                fontWeight: 700,
              }}>
              Cadastrar Aluno
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button
              onClick={() => {
                handleOpenUserMenu();
                console.log("clicou");
              }}
              sx={{
                my: 2,
                color: "#000",
                display: "flex",
                ml: 5,
                fontWeight: 700,
                alignItems: "center",
                justifyContent: "center",
                gap: "7px",
              }}>
              <LogoutIcon />
              Sair
            </Button>
            <Menu
              sx={{ mt: "45px", ml: "10px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={!!anchorElUser}
              onClose={handleCloseUserMenu}>
              <MenuItem onClick={() => handleCloseUserMenu("logout")}>
                <Typography textAlign="center">Sair</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
