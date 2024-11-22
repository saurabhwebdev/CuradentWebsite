import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation({ openAppointmentModal }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId) => {
    if (!isHomePage) {
      window.location.href = '/#' + sectionId;
      return;
    }
    
    if (sectionId === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const MenuLink = ({ to, children, onClick, mobile }) => {
    const isActive = location.pathname === to || 
                    location.hash === to || 
                    (location.pathname === '/' && to === '#' + location.hash.slice(1));
    
    const baseClasses = `relative px-4 py-2 ${mobile ? 'w-full text-left' : 'rounded-full'} text-gray-700 transition-all duration-300 group`;
    const activeClasses = isActive ? "text-primary font-medium" : "hover:text-secondary";

    return onClick ? (
      <button 
        onClick={(e) => {
          onClick(e);
          setIsMenuOpen(false); // Close menu after click
        }}
        className={`${baseClasses} ${activeClasses}`}
      >
        {children}
        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-primary to-secondary transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
      </button>
    ) : (
      <Link 
        to={to}
        onClick={() => setIsMenuOpen(false)}
        className={`${baseClasses} ${activeClasses}`}
      >
        {children}
        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-primary to-secondary transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
      </Link>
    );
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link 
            to="/" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="text-2xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent"
          >
            CuraDent
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <MenuLink 
              to="/"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
            >
              Home
            </MenuLink>
            <MenuLink onClick={() => scrollToSection('services')}>Services</MenuLink>
            <MenuLink onClick={() => scrollToSection('team')}>Team</MenuLink>
            <MenuLink onClick={() => scrollToSection('testimonials')}>Testimonials</MenuLink>
            <MenuLink onClick={() => scrollToSection('contact')}>Contact</MenuLink>
            <Link 
              to="/teleconsult"
              className="inline-flex items-center px-4 py-2 rounded-full text-primary hover:bg-primary/5 transition-colors"
            >
              <svg 
                className="w-5 h-5 mr-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" 
                />
              </svg>
              Virtual Consultation
            </Link>
          </div>

          {/* Desktop Book Appointment Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={openAppointmentModal}
              className="bg-gradient-to-r from-secondary to-primary text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-16 bg-white border-b border-gray-100 shadow-lg">
            <div className="flex flex-col p-4 space-y-3">
              <MenuLink 
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('home');
                }}
                mobile
              >
                Home
              </MenuLink>
              <MenuLink 
                onClick={() => scrollToSection('services')} 
                mobile
              >
                Services
              </MenuLink>
              <MenuLink 
                onClick={() => scrollToSection('team')} 
                mobile
              >
                Team
              </MenuLink>
              <MenuLink 
                onClick={() => scrollToSection('testimonials')} 
                mobile
              >
                Testimonials
              </MenuLink>
              <MenuLink 
                onClick={() => scrollToSection('contact')} 
                mobile
              >
                Contact
              </MenuLink>

              {/* Add Teleconsultation Link */}
              <Link 
                to="/teleconsult"
                className="flex items-center px-4 py-2 text-gray-700 hover:text-secondary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg 
                  className="w-5 h-5 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" 
                  />
                </svg>
                Virtual Consultation
              </Link>
              
              <button 
                onClick={(e) => {
                  openAppointmentModal(e);
                  setIsMenuOpen(false);
                }}
                className="w-full bg-gradient-to-r from-secondary to-primary text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300"
              >
                Book Appointment
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navigation; 