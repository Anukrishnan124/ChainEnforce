import { Typography } from "@mui/material";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useState } from "react";

import Appbar from "./components/Appbar";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import RegisterGrievance from "./pages/RegisterGrievance";
import ViewStatus from "./pages/ViewStatus";

function App() {
  const [wallet, setWallet] = useState("");
  console.log({ wallet });
  return (
    <Router>
      <div className="App">
        <Appbar wallet={wallet} setWallet={setWallet} />
        <Routes>
          <Route path="/login" element={<LoginPage setWallet={setWallet} />} />
          <Route
            path="/register-grievance"
            element={
              <RegisterGrievance wallet={wallet} setWallet={setWallet} />
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="/view-status" element={<ViewStatus />} />
          <Route path="*" element={<Navigate to={"/"} replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
