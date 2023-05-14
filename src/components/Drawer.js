import Box from "@mui/material/Box";
import { Drawer } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Data from "../data/DrawerButtons";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

export default function MuiDrawer({ open, toggleDrawer, wallet, setWallet }) {
  const navigate = useNavigate();

  const handleClick = (link) => {
    navigate(link);
  };

  return (
    <div>
      <Drawer open={open} onClose={() => toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => toggleDrawer(false)}
          onKeyDown={() => toggleDrawer(false)}
        >
          <List>
            {Data.map((data, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton onClick={() => handleClick(data.link)}>
                  <ListItemIcon>{data.icon}</ListItemIcon>
                  <ListItemText primary={data.text} />
                </ListItemButton>
              </ListItem>
            ))}
            {wallet ? (
              <ListItem disablePadding>
                <ListItemButton onClick={() => setWallet("")}>
                  <ListItemIcon>
                    <LogoutIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Disconnect"} />
                </ListItemButton>
              </ListItem>
            ) : null}
          </List>
        </Box>
      </Drawer>
    </div>
  );
}
