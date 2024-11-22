import React from 'react';
import { motion } from 'framer-motion';

function Testimonials({ openAppointmentModal }) {
  const testimonials = [
    {
      name: "Yvonne Thompson",
      rating: 5,
      comment: "The best dental experience I've ever had. Dr Sarah and her team are not only professional but also very understanding. They took the time to explain everything and made sure I was comfortable.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200",
      date: "2 weeks ago",
      role: "Regular Patient"
    },
    {
      name: "James Wilson",
      rating: 5,
      comment: "Started here with a basic fear of dentists, but they helped me overcome my dental anxiety. The attention to detail and care they provided made my dental visit actually enjoyable.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
      date: "1 month ago",
      role: "Cosmetic Dentistry Patient"
    },
    {
      name: "Lisa Mitchell",
      rating: 5,
      comment: "Finally found a dentist office that my kids actually love to visit! The pediatric dentist was amazing with my children. The practice is modern, clean and the staff is super friendly.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=200&h=200",
      date: "3 weeks ago",
      role: "Parent"
    }
  ];

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
            Real stories from our satisfied patients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-6">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  index % 2 === 0 ? 'bg-primary' : 'bg-secondary'
                }`}>
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>

              {/* Rating */}
              <div className="flex mb-4 mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.svg 
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    className="w-5 h-5 text-yellow-400" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <motion.p 
                className="text-gray-600 mb-6 relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                "{testimonial.comment}"
              </motion.p>

              {/* Author Info */}
              <div className="flex items-center mt-6 pt-6 border-t border-gray-100">
                <div className="relative">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div className="ml-4">
                  <h4 className="text-base font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    {testimonial.name}
                  </h4>
                  <div className="flex items-center mt-1">
                    <span className="text-sm text-primary/80">{testimonial.role}</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-sm text-gray-500">{testimonial.date}</span>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Updated Experience Our Care Button */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <button 
            onClick={openAppointmentModal}
            className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-secondary to-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
          >
            <span>Experience Our Care</span>
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials; 