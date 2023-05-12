import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate, useLocation } from "react-router-dom";
import MuiDrawer from "./Drawer";

export default function Appbar({ wallet, setWallet }) {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  let location = useLocation();
  
  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    setWallet("");
    navigate("/login");
  }

  const toggleDrawer = (value) => {
    setOpen(value);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Chain Enforce
          </Typography>
          {/* {location.pathname !== '/login' ? (
            <Button color="inherit" onClick={handleLogin}>
              Login
            </Button>
          ) : null} */}
          {/* {wallet ? (
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          ) : null} */}
        </Toolbar>
      </AppBar>
      <MuiDrawer open={open} toggleDrawer={toggleDrawer} />
    </Box>
  );
}
