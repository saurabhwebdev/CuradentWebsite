import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLock, FaShieldAlt, FaCreditCard, FaCheckCircle } from 'react-icons/fa';
import { SiRazorpay } from 'react-icons/si';

function TeleConsult() {
  const [showCalendly, setShowCalendly] = useState(false);
  const [isCalendlyLoading, setIsCalendlyLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const consultationFee = 299;

  // Simple form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (showCalendly) {
      const script = document.createElement('script');
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/hellocuradent/virtual-consultation',
          parentElement: document.querySelector('.calendly-inline-container'),
        });
        setTimeout(() => setIsCalendlyLoading(false), 1000);
      };

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [showCalendly]);

  const handlePayment = () => {
    if (!name || !email || !phone) {
      setError('Please fill all fields');
      return;
    }

    setLoading(true);
    setError('');

    const options = {
      key: "rzp_test_AiGEdpl2KqC1xZ",
      amount: consultationFee * 100,
      currency: "INR",
      name: "CuraDent",
      description: "Virtual Consultation",
      prefill: {
        name,
        email,
        contact: phone
      },
      theme: {
        color: "#6366f1"
      },
      handler: function(response) {
        console.log(response);
        setShowCalendly(true);
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
    setLoading(false);
  };

  const SecurityBadges = () => (
    <div className="grid grid-cols-2 gap-4 mt-8 mb-6">
      <div className="flex items-center space-x-2 text-gray-600 text-sm">
        <FaLock className="text-green-500 text-lg" />
        <span>256-bit SSL Secured</span>
      </div>
      <div className="flex items-center space-x-2 text-gray-600 text-sm">
        <FaShieldAlt className="text-blue-500 text-lg" />
        <span>End-to-End Encrypted</span>
      </div>
      <div className="flex items-center space-x-2 text-gray-600 text-sm">
        <FaCreditCard className="text-purple-500 text-lg" />
        <span>PCI DSS Compliant</span>
      </div>
      <div className="flex items-center space-x-2 text-gray-600 text-sm">
        <FaCheckCircle className="text-primary text-lg" />
        <span>Verified Payment</span>
      </div>
    </div>
  );

  const PaymentFeatures = () => (
    <div className="border-t border-gray-100 pt-6 mt-6">
      <h3 className="text-sm font-medium text-gray-900 mb-4">What you get:</h3>
      <div className="space-y-3">
        {[
          'Secure Video Consultation',
          'Detailed Medical Discussion',
          'Digital Prescription',
          'Follow-up Support',
          'Payment Receipt'
        ].map((feature, index) => (
          <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
            <FaCheckCircle className="text-green-500 flex-shrink-0" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );

  if (showCalendly) {
    return (
      <div className="pt-16 min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            {isCalendlyLoading ? (
              <div className="h-[600px] flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
              </div>
            ) : (
              <div className="calendly-inline-container min-h-[600px]" />
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-md mx-auto px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Virtual Consultation</h1>
            <p className="text-gray-600 mt-2">Book your online consultation</p>
            <div className="mt-4 flex flex-col items-center">
              <span className="text-3xl font-bold text-primary">₹{consultationFee}</span>
              <span className="text-sm text-gray-500">One-time consultation fee</span>
            </div>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter 10-digit number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                  maxLength={10}
                />
              </div>
            </div>

            {error && (
              <div className="bg-red-50 text-red-500 text-sm p-3 rounded-lg flex items-center space-x-2">
                <FaShieldAlt className="flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <button
              onClick={handlePayment}
              disabled={loading}
              className="w-full bg-gradient-to-r from-primary to-primary/90 text-white p-4 rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 font-medium flex items-center justify-center space-x-2"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <FaLock className="text-sm" />
                  <span>Proceed to Secure Payment</span>
                </>
              )}
            </button>

            <SecurityBadges />

            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
              <span>Powered by</span>
              <SiRazorpay className="text-blue-600 text-xl" />
              <span>Razorpay</span>
            </div>

            <PaymentFeatures />

            <div className="mt-6 text-xs text-gray-500 text-center space-y-2">
              <p>Your payment information is encrypted and secure</p>
              <p>By proceeding, you agree to our Terms of Service and Privacy Policy</p>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default TeleConsult; 