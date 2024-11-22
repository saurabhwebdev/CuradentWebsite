import React from 'react';
import { motion } from 'framer-motion';

function Hero({ openAppointmentModal }) {
  return (
    <section id="home" className="relative min-h-[calc(100vh-4rem)] flex items-center bg-gradient-to-r from-secondary/5 to-primary/5">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                <motion.span 
                  className="block bg-gradient-to-r from-gray-900 via-primary to-gray-900 bg-clip-text text-transparent bg-[length:200%_100%]"
                  initial={{ backgroundPosition: '200% 0' }}
                  animate={{ backgroundPosition: '-200% 0' }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "linear"
                  }}
                >
                  Your Smile
                </motion.span>
                <motion.span 
                  className="block bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent bg-[length:200%_100%]"
                  initial={{ backgroundPosition: '200% 0' }}
                  animate={{ backgroundPosition: '-200% 0' }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "linear",
                    delay: 0.2
                  }}
                >
                  Matters
                </motion.span>
                <motion.span 
                  className="block bg-gradient-to-r from-gray-900 via-primary to-gray-900 bg-clip-text text-transparent bg-[length:200%_100%]"
                  initial={{ backgroundPosition: '200% 0' }}
                  animate={{ backgroundPosition: '-200% 0' }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "linear",
                    delay: 0.4
                  }}
                >
                  To Us
                </motion.span>
              </h1>
            </motion.div>

            <motion.p 
              className="text-gray-600 text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Experience world-class dental care in a comfortable and modern environment. Our expert team is dedicated to giving you the perfect smile you deserve.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <button
                onClick={openAppointmentModal}
                className="relative px-8 py-4 bg-gradient-to-r from-secondary to-primary text-white rounded-full overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Book Appointment →
              </button>

              <button
                onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white/80 text-gray-700 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-white"
              >
                Explore Services
              </button>
            </motion.div>

            <motion.div 
              className="grid grid-cols-3 gap-8 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              {[
                { number: "15+", label: "Years Experience" },
                { number: "10k+", label: "Happy Patients" },
                { number: "4.9★", label: "Patient Rating" }
              ].map((stat, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm p-4 rounded-xl hover:shadow-md transition-all duration-300">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {stat.number}
                  </h3>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <img 
                src="/hero-image.jpg" 
                alt="Modern Dental Clinic" 
                className="w-full h-full object-cover"
              />
              <motion.div 
                className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-3"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Certified Expert
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero; 