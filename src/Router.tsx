import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Campaings from "./pages/campaigns/Campaings";
import NewCampaing from "./pages/campaigns/NewCampaing";
import SuccessCampaing from "./components/modals/Success";
import Decline from "./components/modals/Decline";

const RouterApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/campañas" element={<Campaings />} />
        <Route path="/nueva-campaña" element={<NewCampaing />} />
        <Route path="/operacion-exitosa" element={<SuccessCampaing />} />
        <Route path="/operacion-rechazada" element={<Decline />} />
      </Routes>
    </Router>
  );
};

export default RouterApp;
