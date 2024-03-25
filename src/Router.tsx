import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Campaings from './components/campaigns/Campaings';
import NewCampaing from './components/campaigns/NewCampaing';
import SuccessCampaing from './components/shared/Success';
import Decline from './components/shared/Decline';

const RouterApp = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/campañas" element={<Campaings/>} />
            <Route path="/nueva-campaña" element={<NewCampaing/>} />
            <Route path="/operacion-exitosa" element={<SuccessCampaing/>} />
            <Route path="/operacion-rechazada" element={<Decline/>} />
        </Routes>
    </Router>
  )
}

export default RouterApp