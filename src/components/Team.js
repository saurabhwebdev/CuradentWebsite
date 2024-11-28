import React from 'react';
import { motion } from 'framer-motion';

function Team({ openAppointmentModal }) {
  const team = [
    {
      name: "Dr. Kritilaxmi Jha",
      role: "Founder & Clinic Head",
      image: "https://i.postimg.cc/PrRsM9My/Whats-App-Image-2024-11-28-at-5-41-09-PM.jpg",
      education: "MDS - Prosthodontics",
      experience: "10+ Years Experience",
      specialization: "Aesthetic dentistry, Implants & Full Mouth Rehabilitation & Dentures",
      achievements: [
        "Resource Person at ILAMED",
        "Attached to PD Hinduja Sindhi Hospital & HCG Hospital"
              ],
      languages: ["English", "Hindi", "Kannada", "Tamil", "Telugu"]
    },
    {
      name: "Dr. J. Raghunand Sindhe",
      role: "Consultant Implantologist",
      image: "https://i.postimg.cc/cHHSsWxp/Whats-App-Image-2024-11-28-at-5-35-44-PM.jpg",
      education: "MDS - Oral Medicine & Radiology",
      experience: "15+ Years Experience",
      specialization: "Dental Implants & Dental Radiology and Medicine",
      achievements: [
        "Fellowship in Implantology & Persuing PHD",
        "Convener IDA Bengaluru Chapter"
      ],
      languages: ["English", "Hindi", "Kannada", "Marathi"]
    },
    {
      name: "Dr. Manjunath",
      role: "Consultant Oral & Maxillofacial Surgeon",
      image: "https://i.postimg.cc/6q73HRF1/young-handsome-physician-medical-robe-with-stethoscope.jpg",
      education: "MDS - Oral & Maxillofacial Surgery",
      experience: "12+ Years Experience",
      specialization: "Oral & Maxillofacial Surgery, Cranio-Maxillofacial Surgery & Oral Onco-Surgery",
      achievements: [
        "Trauma Management & Emergency Care Expert",
        "Dental Disimpaction Expert"
      ],
      languages: ["English", "Hindi", "Kannada", "Telugu"]
    }
  ];

  return (
    <section id="team" className="py-24 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our highly skilled professionals are committed to providing you with exceptional dental care
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Section */}
              <div className="relative h-[300px] overflow-hidden">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />
                {/* Consultation Badge */}
                <motion.button
                  onClick={openAppointmentModal}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-2 hover:bg-white transition-all duration-300 group/badge shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div 
                    className="w-2 h-2 bg-green-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                  <span className="text-xs font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Available for Consultation
                  </span>
                </motion.button>
              </div>

              {/* Content Section */}
              <div className="p-6 space-y-4">
                {/* Name and Role */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium">{member.role}</p>
                </div>

                {/* Details */}
                <div className="space-y-2 text-gray-600">
                  <p>{member.education}</p>
                  <p>{member.experience}</p>
                  <p>{member.specialization}</p>
                </div>

                {/* Achievements */}
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {member.achievements.map((achievement, i) => (
                      <span 
                        key={i}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>

                  {/* Languages */}
                  <div className="flex gap-2 text-gray-500 text-sm">
                    {member.languages.map((lang, i) => (
                      <span key={i}>
                        {lang}{i !== member.languages.length - 1 && " • "}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team; 