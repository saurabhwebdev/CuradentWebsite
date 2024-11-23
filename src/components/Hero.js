import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

function Hero({ openAppointmentModal }) {
  return (
    <section className="relative h-[calc(100vh-64px)] overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative h-full"
          >
            <img
              src="/hero-image.jpg"
              alt="Modern Dental Clinic"
              className="w-full h-full object-cover object-center rounded-bl-[100px]"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/20 to-white" />
          </motion.div>
        </div>
        
        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 1 }}
          className="absolute inset-0 overflow-hidden"
        >
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center h-full max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md mb-6 w-fit"
          >
            <span className="flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Now Accepting New Patients
            </span>
          </motion.div>

          {/* Updated Main Heading with glass effect and gradient animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mb-4"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <div className="relative">
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 blur-xl animate-gradient-x"></span>
                  <span className="relative bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent backdrop-blur-sm">
                    Modern Dental Care
                  </span>
                </span>
              </div>
              <div className="relative mt-2">
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-gradient-to-r from-gray-800/5 via-gray-900/5 to-gray-800/5 blur-lg animate-gradient-x"></span>
                  <span className="relative bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent backdrop-blur-sm">
                    for Your Family
                  </span>
                </span>
              </div>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed"
          >
            Experience world-class dental care in a comfortable and modern environment.
            Our expert team is dedicated to your perfect smile.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-12"
          >
            <button
              onClick={openAppointmentModal}
              className="group px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold 
                       hover:shadow-lg hover:shadow-primary/20 transform hover:-translate-y-0.5 transition-all duration-300
                       flex items-center space-x-2"
            >
              <span>Book Appointment</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-3 gap-6"
          >
            {[
              { value: "15+", label: "Years Experience" },
              { value: "10k+", label: "Happy Patients" },
              { value: "4.9★", label: "Rating" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + (index * 0.1) }}
                className="bg-white rounded-2xl shadow-lg p-4 transform hover:scale-105 transition-transform duration-300"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero; 