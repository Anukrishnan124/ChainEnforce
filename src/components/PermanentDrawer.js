import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";

const PermanentDrawer = ({ arr }) => {
  const navigate = useNavigate();

  const handleClick = (link) => {
    navigate(link);
  };

  return (
    <Box
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
        },
        position: "relative",
        // borderRight: 1,
        // borderColor: "gray"
      }}
    >
      {/* <Toolbar /> */}
      <List>
        {arr
          ? arr.map((data, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton onClick={() => handleClick(data.link)}>
                  <ListItemIcon>{data.icon}</ListItemIcon>
                  <ListItemText primary={data.text} />
                </ListItemButton>
              </ListItem>
            ))
          : null}
      </List>
      <Divider
        sx={{ position: "absolute", right: 0, top: 0 }}
        orientation="vertical"
      />
    </Box>
  );
};

export default PermanentDrawer;
