import React from 'react';

function GeneralDentistry() {
  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-secondary/10 to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">General Dentistry</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Comprehensive dental care for your entire family. We focus on preventive care 
            and maintaining your oral health for a lifetime of beautiful smiles.
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Dental Check-ups",
              description: "Regular examinations to maintain oral health and prevent issues.",
              icon: "🦷"
            },
            {
              title: "Professional Cleaning",
              description: "Deep cleaning to remove plaque and maintain gum health.",
              icon: "✨"
            },
            {
              title: "Cavity Fillings",
              description: "Modern, tooth-colored fillings to restore damaged teeth.",
              icon: "🔨"
            },
            {
              title: "Root Canal Therapy",
              description: "Advanced treatment to save severely damaged teeth.",
              icon: "🦿"
            }
          ].map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${index % 2 === 0 ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'}`}>
                <span className="text-2xl">{service.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Experienced Team",
                description: "Our dentists have years of experience in general dentistry."
              },
              {
                title: "Modern Technology",
                description: "State-of-the-art equipment for precise diagnostics and treatment."
              },
              {
                title: "Comfortable Care",
                description: "We prioritize your comfort throughout every procedure."
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneralDentistry; 