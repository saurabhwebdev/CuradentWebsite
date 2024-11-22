import React from 'react';

function EmergencyCare() {
  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-secondary/10 to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Emergency Dental Care</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Immediate dental care when you need it most. Our emergency dental services 
            are available to provide quick relief and professional treatment.
          </p>
        </div>
      </div>

      {/* Emergency Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Severe Toothache",
              description: "Immediate pain relief and treatment for acute dental pain.",
              icon: "🦷"
            },
            {
              title: "Broken Teeth",
              description: "Quick repair of chipped, cracked, or broken teeth.",
              icon: "💢"
            },
            {
              title: "Lost Fillings",
              description: "Replacement of lost or damaged dental fillings.",
              icon: "🔧"
            },
            {
              title: "Dental Trauma",
              description: "Emergency care for accidents and injuries.",
              icon: "🚨"
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

      {/* Emergency Instructions */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What to Do in a Dental Emergency</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Call Us Immediately",
                description: "Contact our emergency line for immediate assistance and guidance.",
                icon: "📞"
              },
              {
                title: "First Aid Steps",
                description: "Follow basic first aid procedures while waiting for treatment.",
                icon: "🏥"
              },
              {
                title: "Get Treatment",
                description: "Visit our clinic for professional emergency dental care.",
                icon: "👨‍⚕️"
              }
            ].map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${index % 2 === 0 ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'}`}>
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">24/7 Emergency Contact</h2>
          <p className="text-xl text-gray-600 mb-8">We're here when you need us most</p>
          <a href="tel:+1234567890" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-secondary to-primary hover:opacity-90 transition-opacity">
            Call Emergency Line
          </a>
        </div>
      </div>
    </div>
  );
}

export default EmergencyCare; 