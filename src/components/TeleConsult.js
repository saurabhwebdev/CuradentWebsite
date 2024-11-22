import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';

function TeleConsult() {
  const [showCalendly, setShowCalendly] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [paymentError, setPaymentError] = useState('');
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [transactionId, setTransactionId] = useState('');
  const consultationFee = 1;
  const upiId = "9900379125@ybl";
  const [isCalendlyLoading, setIsCalendlyLoading] = useState(true);

  useEffect(() => {
    // Check if payment is verified in URL params
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('payment') === 'success') {
      setShowCalendly(true);
    }
  }, []);

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

  const upiLink = `upi://pay?pa=${upiId}&pn=CuraDent&am=${consultationFee}&cu=INR&tn=Teleconsultation`;

  const initiatePayment = () => {
    setPaymentError('');
    // For mobile devices
    if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      window.location.href = upiLink;
    } else {
      // For desktop, show QR code
      setShowQR(true);
    }
  };

  const verifyPayment = () => {
    if (!transactionId) {
      setPaymentError('Please enter your UPI transaction ID');
      return;
    }
    // Here you could add additional verification if needed
    setShowCalendly(true);
    setPaymentError('');
  };

  const HelpSection = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 md:p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">How to Find UPI Transaction ID</h3>
          <button 
            onClick={() => setShowHelp(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-6">
          {/* Google Pay */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-lg mb-2 flex items-center">
              <img src="/images/upi-logos/gpay.png" alt="Google Pay" className="w-8 h-8 mr-2" />
              Google Pay
            </h4>
            <ol className="list-decimal list-inside space-y-2 text-gray-600">
              <li>Open Google Pay</li>
              <li>Tap on your profile picture → Payments</li>
              <li>Find the payment to CuraDent</li>
              <li>Look for "UPI reference number" or "UTR"</li>
            </ol>
          </div>

          {/* PhonePe */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-lg mb-2 flex items-center">
              <img src="/images/upi-logos/phonepe.png" alt="PhonePe" className="w-8 h-8 mr-2" />
              PhonePe
            </h4>
            <ol className="list-decimal list-inside space-y-2 text-gray-600">
              <li>Open PhonePe app</li>
              <li>Go to History tab</li>
              <li>Find and tap on the payment</li>
              <li>Transaction ID is listed as "UPI Ref No."</li>
            </ol>
          </div>

          {/* Paytm */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-lg mb-2 flex items-center">
              <img src="/images/upi-logos/paytm.png" alt="Paytm" className="w-8 h-8 mr-2" />
              Paytm
            </h4>
            <ol className="list-decimal list-inside space-y-2 text-gray-600">
              <li>Open Paytm app</li>
              <li>Tap on "Passbook" or "Balance"</li>
              <li>Find the transaction</li>
              <li>Look for "UPI Reference ID"</li>
            </ol>
          </div>

          {/* BHIM UPI */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-lg mb-2 flex items-center">
              <img src="/images/upi-logos/bhim.png" alt="BHIM" className="w-8 h-8 mr-2" />
              BHIM UPI
            </h4>
            <ol className="list-decimal list-inside space-y-2 text-gray-600">
              <li>Open BHIM app</li>
              <li>Go to Transaction History</li>
              <li>Select the payment</li>
              <li>Find "UPI Transaction Reference"</li>
            </ol>
          </div>

          {/* Amazon Pay */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-lg mb-2 flex items-center">
              <img src="/images/upi-logos/amazon-pay.png" alt="Amazon Pay" className="w-8 h-8 mr-2" />
              Amazon Pay
            </h4>
            <ol className="list-decimal list-inside space-y-2 text-gray-600">
              <li>Open Amazon Pay</li>
              <li>Tap on "Transactions"</li>
              <li>Find the payment</li>
              <li>Look for "UPI Reference Number"</li>
            </ol>
          </div>

          {/* WhatsApp Pay */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-lg mb-2 flex items-center">
              <img src="/images/upi-logos/whatsapp-pay.png" alt="WhatsApp Pay" className="w-8 h-8 mr-2" />
              WhatsApp Pay
            </h4>
            <ol className="list-decimal list-inside space-y-2 text-gray-600">
              <li>Open WhatsApp</li>
              <li>Go to Settings → Payments</li>
              <li>Tap on "Payment History"</li>
              <li>Find "UPI Transaction Reference"</li>
            </ol>
          </div>

          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Note:</span> The UPI Transaction ID is usually a long string of numbers and letters. 
              It might also be called UTR, Reference Number, or UPI Ref No. depending on the app you use.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const PaymentVerificationForm = () => (
    <div className="mt-6 pt-6 border-t border-gray-100">
      <p className="text-sm text-gray-500 mb-4">
        Please enter your UPI transaction ID to verify payment
      </p>
      <input
        type="text"
        value={transactionId}
        onChange={(e) => setTransactionId(e.target.value)}
        placeholder="Enter UPI Transaction ID"
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
      />
      <button
        type="button"
        onClick={() => setShowHelp(true)}
        className="text-primary text-sm mb-4 hover:underline flex items-center justify-center"
      >
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Where to find the Transaction ID?
      </button>
      {paymentError && (
        <p className="text-red-500 text-sm mb-4">{paymentError}</p>
      )}
      <button
        onClick={verifyPayment}
        className="w-full border-2 border-primary text-primary px-6 py-3 rounded-full hover:bg-primary/5 transition-all duration-300"
      >
        Verify Payment
      </button>
    </div>
  );

  const LoadingAnimation = () => (
    <div className="flex flex-col items-center justify-center h-[700px]">
      <motion.div
        className="relative w-24 h-24"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        {/* Outer circle */}
        <motion.div
          className="absolute inset-0 border-4 border-primary/30 rounded-full"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        />
        
        {/* Inner circle */}
        <motion.div
          className="absolute inset-2 border-4 border-secondary/40 rounded-full"
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: 0.8, opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
        />
        
        {/* Center dot */}
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
              
              {showQR ? (
                <div className="text-center mb-6">
                  <div className="bg-white p-4 rounded-lg inline-block mb-4">
                    <QRCodeSVG 
                      value={upiLink}
                      size={200}
                      level="H"
                      includeMargin={true}
                    />
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Scan this QR code with any UPI app to pay
                  </p>
                  <button
                    onClick={() => setShowQR(false)}
                    className="text-primary underline text-sm"
                  >
                    Back to payment options
                  </button>
                </div>
              ) : (
                <>
                  <p className="text-gray-600 mb-6">
                    Pay using any UPI app to schedule your consultation
                  </p>
                  <button
                    onClick={initiatePayment}
                    className="w-full bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300"
                  >
                    Pay Now
                  </button>
                </>
              )}
              
              {/* Payment Verification Form */}
              <PaymentVerificationForm />
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
      {showHelp && <HelpSection />}
    </div>
  );
}

export default TeleConsult; 