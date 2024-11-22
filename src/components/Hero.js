import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Hero({ openAppointmentModal }) {
  return (
    <section id="home" className="relative min-h-[calc(100vh-4rem)] flex items-center bg-gradient-to-r from-secondary/5 to-primary/5 overflow-hidden">
      {/* Enhanced Glassmorphism Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Gradient Orbs */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1],
            rotate: [0, -90, 0]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-full blur-3xl"
        />

        {/* Floating Glass Elements */}
        <div className="absolute inset-0">
          {/* Glass Shapes */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
              opacity: [0.3, 0.5, 0.3],
              y: [0, -30, 0],
              x: [0, 20, 0]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 backdrop-blur-lg rounded-2xl rotate-12"
          />
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ 
              opacity: [0.2, 0.4, 0.2],
              y: [0, 30, 0],
              x: [0, -20, 0]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-1/3 right-1/4 w-24 h-24 bg-white/10 backdrop-blur-lg rounded-full"
          />

          {/* Animated Particles */}
          {[...Array(6)].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 0.5, 0],
                scale: [1, 1.2, 1],
                y: [0, -20, 0],
                x: [0, index % 2 === 0 ? 20 : -20, 0]
              }}
              transition={{ 
                duration: 5 + index,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.5
              }}
              className={`absolute w-${index + 2} h-${index + 2} bg-primary/20 rounded-full blur-sm`}
              style={{
                top: `${20 + (index * 15)}%`,
                left: `${20 + (index * 10)}%`
              }}
            />
          ))}

          {/* Decorative Lines */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scaleX: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Highlight Badge - Updated with blinking effect */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="inline-flex items-center bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-lg"
              >
                <div className="relative flex items-center">
                  {/* Pulsing ring effect */}
                  <div className="absolute w-2 h-2">
                    <div className="absolute inline-flex w-full h-full rounded-full opacity-75 bg-green-500 animate-ping"></div>
                  </div>
                  {/* Solid dot */}
                  <div className="relative w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <span className="text-sm font-medium text-gray-800 ml-3">Accepting New Patients</span>
              </motion.div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <motion.span 
                  className="block bg-gradient-to-r from-gray-900 via-primary to-gray-900 bg-clip-text text-transparent bg-[length:200%_100%]"
                  initial={{ backgroundPosition: '200% 0' }}
                  animate={{ backgroundPosition: '-200% 0' }}
                  transition={{ 
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "linear"
                  }}
                >
                  Your Smile
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="block text-gray-900"
                >
                  Matters To Us
                </motion.span>
              </h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-xl text-gray-600 mb-8 leading-relaxed"
              >
                Experience world-class dental care with cutting-edge technology 
                and a team that puts your comfort first.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap gap-4"
              >
                <button
                  onClick={openAppointmentModal}
                  className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold 
                           hover:shadow-lg hover:shadow-primary/20 transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  Book Appointment
                </button>
                <Link
                  to="/services"
                  className="px-8 py-4 border-2 border-gray-200 text-gray-700 rounded-full font-semibold
                           hover:border-primary hover:text-primary transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  Explore Services
                </Link>
              </motion.div>

              {/* Stats Section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-12 grid grid-cols-3 gap-8"
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
                    className="text-center"
                  >
                    <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={process.env.PUBLIC_URL + '/images/hero-image.jpg'}
                alt="Modern Dental Care"
                className="w-full h-auto rounded-2xl transform hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop';
                }}
              />
              
              {/* Pill-shaped Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full shadow-lg py-2 px-4 flex items-center gap-2"
              >
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg 
                    className="w-3 h-3 text-primary" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-900">Certified Expert</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero; 