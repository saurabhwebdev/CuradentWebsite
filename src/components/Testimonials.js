import React from 'react';
import { motion } from 'framer-motion';

function Testimonials({ openAppointmentModal }) {
  React.useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    
    // Add script to document
    document.body.appendChild(script);

    return () => {
      // Cleanup - remove script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            What Our Patients Say
          </h2>
          <p className="text-xl text-gray-600">
            Real Google Reviews from our satisfied patients
          </p>
        </motion.div>

        {/* Your specific Google Reviews Widget */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 reviews-wrapper mx-auto max-w-6xl"
        >
          <div 
            className="elfsight-app-bbd635b4-213a-4054-819a-2be7bc6ba7db" 
            data-elfsight-app-lazy
          ></div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button
            onClick={openAppointmentModal}
            className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Experience Our Care
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials; 