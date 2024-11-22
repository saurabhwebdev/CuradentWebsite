import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';
import SEO from './components/SEO';
import PrivacyPolicy from './pages/PrivacyPolicy';
import GeneralDentistry from './pages/services/GeneralDentistry';
import CosmeticDentistry from './pages/services/CosmeticDentistry';
import Orthodontics from './pages/services/Orthodontics';
import EmergencyCare from './pages/services/EmergencyCare';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import TeleConsult from './components/TeleConsult';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openAppointmentModal = (e) => {
    if (e) e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <>
      <Navigation openAppointmentModal={openAppointmentModal} />
      <Routes>
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/services/general-dentistry" element={<GeneralDentistry />} />
        <Route path="/services/cosmetic-dentistry" element={<CosmeticDentistry />} />
        <Route path="/services/orthodontics" element={<Orthodontics />} />
        <Route path="/services/emergency-care" element={<EmergencyCare />} />
        <Route path="/" element={
          <>
            <SEO 
              title="Modern Dental Care"
              description="Experience world-class dental care in a comfortable and modern environment."
              keywords="dental care, dentist, family dentist, dental clinic, modern dentistry"
              url="https://curadent.com"
              image="/og-image.jpg"
            />
            <div className="min-h-screen pt-16">
              <Hero openAppointmentModal={openAppointmentModal} />
              <Services />
              <Team openAppointmentModal={openAppointmentModal} />
              <Testimonials openAppointmentModal={openAppointmentModal} />
              <Contact />
            </div>
          </>
        } />
        <Route path="/teleconsult" element={<TeleConsult />} />
      </Routes>
      <Footer />
      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export default App;
