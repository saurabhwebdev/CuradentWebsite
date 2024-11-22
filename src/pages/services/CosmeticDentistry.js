import React from 'react';

function CosmeticDentistry() {
  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-secondary/10 to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Cosmetic Dentistry</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Transform your smile with our advanced cosmetic dental procedures. 
            We combine artistry with dental expertise to create beautiful, natural-looking results.
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Teeth Whitening",
              description: "Professional whitening treatments for a brighter smile.",
              icon: "✨"
            },
            {
              title: "Dental Veneers",
              description: "Custom-made shells to improve tooth appearance.",
              icon: "🦷"
            },
            {
              title: "Dental Bonding",
              description: "Repair chipped or cracked teeth with natural-looking materials.",
              icon: "🔧"
            },
            {
              title: "Smile Makeover",
              description: "Comprehensive treatment plan for total smile transformation.",
              icon: "⭐"
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

      {/* Before & After Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Transform Your Smile</h2>
          <p className="text-center text-gray-600 mb-12">
            See the amazing transformations we've achieved for our patients
          </p>
          {/* Add before/after image gallery here */}
        </div>
      </div>
    </div>
  );
}

export default CosmeticDentistry; 