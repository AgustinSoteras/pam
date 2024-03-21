import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Campaings from './components/campaigns/Campaings';
import NewCampaing from './components/campaigns/NewCampaing';
import SuccessCampaing from './components/campaigns/SuccessCampaing';

const RouterApp = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/campañas" element={<Campaings/>} />
            <Route path="/nueva-campaña" element={<NewCampaing/>} />
            <Route path="/campaña-creada" element={<SuccessCampaing/>} />
        </Routes>
    </Router>
  )
}

export default RouterApp