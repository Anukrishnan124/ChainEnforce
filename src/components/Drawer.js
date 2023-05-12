import Box from "@mui/material/Box";
import { Drawer } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Data from "../data/DrawerButtons";
import { useNavigate } from "react-router-dom";

export default function MuiDrawer({open, toggleDrawer}) {
  const navigate = useNavigate();

  const handleClick = (link) => {
    navigate(link);
  }

  return (
    <div>
      {/* <Button onClick={() => toggleDrawer(true)}>open</Button> */}
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
                  <ListItemIcon>
                    {data.icon}
                  </ListItemIcon>
                  <ListItemText primary={data.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </div>
  );
}
