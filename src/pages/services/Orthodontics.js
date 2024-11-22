import React from 'react';

function Orthodontics() {
  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-secondary/10 to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Orthodontics</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Achieve the perfect smile with our advanced orthodontic treatments. 
            We offer modern solutions for teeth alignment that fit your lifestyle.
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Traditional Braces",
              description: "Modern metal braces with advanced comfort features.",
              icon: "🦷"
            },
            {
              title: "Clear Aligners",
              description: "Invisible aligners for discreet teeth straightening.",
              icon: "✨"
            },
            {
              title: "Ceramic Braces",
              description: "Tooth-colored brackets for a more subtle appearance.",
              icon: "💎"
            },
            {
              title: "Retainers",
              description: "Custom-made retainers to maintain your perfect smile.",
              icon: "🔄"
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

      {/* Treatment Process */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Treatment Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Initial Consultation",
                description: "Comprehensive examination and treatment planning."
              },
              {
                title: "Custom Treatment",
                description: "Personalized orthodontic solution for your needs."
              },
              {
                title: "Regular Adjustments",
                description: "Periodic check-ups to ensure proper progress."
              },
              {
                title: "Retention Phase",
                description: "Maintaining your new smile for years to come."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className={`w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center ${index % 2 === 0 ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'}`}>
                  <span className="font-bold text-lg">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orthodontics; 