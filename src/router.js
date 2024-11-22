import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import App from './App';
import GeneralDentistry from './pages/services/GeneralDentistry';
import CosmeticDentistry from './pages/services/CosmeticDentistry';
import Orthodontics from './pages/services/Orthodontics';
import EmergencyCare from './pages/services/EmergencyCare';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AppointmentModal from './components/AppointmentModal';

function AppRouter() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openAppointmentModal = (e) => {
    if (e) e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={
            <Layout openAppointmentModal={openAppointmentModal}>
              <App openAppointmentModal={openAppointmentModal} />
            </Layout>
          } />
          <Route path="/privacy-policy" element={
            <Layout openAppointmentModal={openAppointmentModal}>
              <PrivacyPolicy />
            </Layout>
          } />
          <Route path="/services/general-dentistry" element={
            <Layout openAppointmentModal={openAppointmentModal}>
              <GeneralDentistry />
            </Layout>
          } />
          <Route path="/services/cosmetic-dentistry" element={
            <Layout openAppointmentModal={openAppointmentModal}>
              <CosmeticDentistry />
            </Layout>
          } />
          <Route path="/services/orthodontics" element={
            <Layout openAppointmentModal={openAppointmentModal}>
              <Orthodontics />
            </Layout>
          } />
          <Route path="/services/emergency-care" element={
            <Layout openAppointmentModal={openAppointmentModal}>
              <EmergencyCare />
            </Layout>
          } />
        </Routes>
        <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </Router>
    </HelmetProvider>
  );
}

export default AppRouter; 