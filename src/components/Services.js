import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Services() {
  const services = [
    {
      icon: "🦷",
      title: "General Dentistry",
      description: "Regular check-ups, cleaning, and preventive dental health.",
      link: "/services/general-dentistry"
    },
    {
      icon: "✨",
      title: "Cosmetic Dentistry",
      description: "Transform your smile with whitening, veneers, and more.",
      link: "/services/cosmetic-dentistry"
    },
    {
      icon: "🦿",
      title: "Orthodontics",
      description: "Align your teeth with modern braces and clear aligners.",
      link: "/services/orthodontics"
    },
    {
      icon: "🚨",
      title: "Emergency Care",
      description: "Available 24/7 for sudden emergencies when you need it most.",
      link: "/services/emergency-care"
    },
    {
      icon: "👶",
      title: "Pediatric Dentistry",
      description: "Specialized dental care specifically designed for children.",
      link: "/services/pediatric-dentistry"
    },
    {
      icon: "🔧",
      title: "Oral Surgery",
      description: "From wisdom teeth removal to dental implants.",
      link: "/services/oral-surgery"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
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
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-primary to-gray-900 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-gray-600 text-lg">
            Comprehensive dental care for your entire family
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                index % 2 === 0 ? 'bg-primary/10' : 'bg-secondary/10'
              } group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-3xl">{service.icon}</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Services; 