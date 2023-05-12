import HomeIcon from "@mui/icons-material/Home";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LoginIcon from '@mui/icons-material/Login';

const Data = [
  {
    text: "Home",
    icon: <HomeIcon />,
    link: "/"
  },
  {
    text: "Register Grievance",
    icon: <AppRegistrationIcon />,
    link: '/register-grievance'
  },
  {
    text: "View Status",
    icon: <VisibilityIcon />,
    link: "/view-status"
  },
  {
    text: "Admin Login",
    icon: <LoginIcon/>,
    link: "/login"
  }
];

export default Data;
