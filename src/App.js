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
import OwnerPage from "./pages/OwnerPage";
import AddAdmin from "./components/AddAdmin";
import Welcome from "./components/AdminWelcome";

const OWNER = process.env.REACT_APP_OWNER_ADDR;
const CYBER_ADMIN = process.env.REACT_APP_CYBER_ADDR;
const THEFT_ADMIN = process.env.REACT_APP_THEFT_ADDR;
const DRUG_ADMIN = process.env.REACT_APP_DRUG_ADDR;
const OTHER_ADMIN = process.env.REACT_APP_OTHER_ADDR;

function App() {
  const [wallet, setWallet] = useState("");

  return (
    <Router>
      <div className="App">
        <Appbar wallet={wallet} setWallet={setWallet} />
        <Routes>
          <Route
            path="login"
            element={
              wallet === OWNER ? (
                <Navigate to={"/owner-dashboard"} replace />
              ) : (
                <LoginPage setWallet={setWallet} />
              )
            }
          />
          <Route
            path="register-grievance"
            element={
              <RegisterGrievance wallet={wallet} setWallet={setWallet} />
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="/view-status" element={<ViewStatus />} />
          <Route
            path="owner-dashboard"
            element={
              wallet === OWNER ? (
                <OwnerPage />
              ) : (
                <Navigate to={"/login"} replace />
              )
            }
          >
            <Route index element={<Welcome />} />
            <Route path={"add-cybercrime-admin"} element={<AddAdmin />} />
            <Route path={"add-theft-admin"} element={<AddAdmin />} />
            <Route path={"add-drug-admin"} element={<AddAdmin />} />
            <Route path={"add-others-admin"} element={<AddAdmin />} />
          </Route>
          <Route path="*" element={<Navigate to={"/"} replace />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
