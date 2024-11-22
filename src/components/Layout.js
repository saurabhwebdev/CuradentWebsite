import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

function Layout({ children, openAppointmentModal }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation openAppointmentModal={openAppointmentModal} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout; 