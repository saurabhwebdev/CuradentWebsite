import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function TeleConsult() {
  const [showCalendly, setShowCalendly] = useState(false);
  const [paymentError, setPaymentError] = useState('');
  const [loading, setLoading] = useState(false);
  const consultationFee = 299;
  const [isCalendlyLoading, setIsCalendlyLoading] = useState(true);

  useEffect(() => {
    if (showCalendly) {
      setIsCalendlyLoading(true);
      const script = document.createElement('script');
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);

      const initCalendly = () => {
        if (window.Calendly) {
          window.Calendly.initInlineWidget({
            url: 'https://calendly.com/hellocuradent/virtual-consultation',
            parentElement: document.querySelector('.calendly-inline-container'),
            prefill: {},
            utm: {}
          });
          setTimeout(() => setIsCalendlyLoading(false), 1000);
        }
      };

      script.onload = initCalendly;

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [showCalendly]);

  const initiatePayment = () => {
    setLoading(true);
    setPaymentError('');

    const options = {
      key: "rzp_test_AiGEdpl2KqC1xZ", // Your razorpay key
      amount: consultationFee * 100, // amount in paisa
      currency: "INR",
      name: "CuraDent",
      description: "Virtual Consultation Booking",
      handler: function (response) {
        // Payment successful
        console.log("Payment successful:", response);
        setShowCalendly(true);
      },
      prefill: {
        name: "",
        email: "",
        contact: ""
      },
      notes: {
        address: "CuraDent Healthcare"
      },
      theme: {
        color: "#6366f1"
      },
      modal: {
        ondismiss: function() {
          setLoading(false);
        }
      }
    };

    try {
      const razorpayInstance = new window.Razorpay(options);
      razorpayInstance.open();
    } catch (error) {
      console.error("Payment error:", error);
      setPaymentError('Failed to initiate payment. Please try again.');
      setLoading(false);
    }
  };

  const LoadingAnimation = () => (
    <div className="flex flex-col items-center justify-center h-[700px]">
      <motion.div
        className="relative w-24 h-24"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        <motion.div
          className="absolute inset-0 border-4 border-primary/30 rounded-full"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        />
        
        <motion.div
          className="absolute inset-2 border-4 border-secondary/40 rounded-full"
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: 0.8, opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
        />
        
        <motion.div
          className="absolute inset-[42%] bg-gradient-to-r from-primary to-secondary rounded-full"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        />
      </motion.div>
      
      <motion.p
        className="mt-8 text-lg text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Loading your consultation calendar...
      </motion.p>
    </div>
  );

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Virtual Consultation
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Schedule a video consultation with our dental experts
          </p>

          {!showCalendly ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto"
            >
              <h2 className="text-2xl font-semibold mb-4">Consultation Fee</h2>
              <p className="text-4xl font-bold text-primary mb-4">₹{consultationFee}</p>
              
              <div className="text-center mb-6">
                <p className="text-gray-600 mb-6">
                  Secure payment powered by Razorpay
                </p>
                <button
                  onClick={initiatePayment}
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 disabled:opacity-50"
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    'Pay ₹299'
                  )}
                </button>
                {paymentError && (
                  <p className="text-red-500 text-sm mt-4">{paymentError}</p>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-lg p-6 md:p-8"
            >
              {isCalendlyLoading && <LoadingAnimation />}
              <div 
                className={`calendly-inline-container ${isCalendlyLoading ? 'hidden' : 'block'}`}
                style={{ minWidth: '320px', height: '700px' }}
              />
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default TeleConsult; 