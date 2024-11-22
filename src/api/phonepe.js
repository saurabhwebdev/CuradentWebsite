const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const axios = require('axios');
require('dotenv').config();

// PhonePe API Configuration
const MERCHANT_ID = process.env.PHONEPE_MERCHANT_ID;
const SALT_KEY = process.env.PHONEPE_SALT_KEY;
const SALT_INDEX = process.env.PHONEPE_SALT_INDEX;
const ENV = 'UAT'; // Use 'PROD' for production
const API_URL = ENV === 'PROD' 
  ? 'https://api.phonepe.com/apis/hermes/pg/v1'
  : 'https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1';

// Create PhonePe payment
router.post('/create-phonepe-payment', async (req, res) => {
  try {
    const { amount, merchantTransactionId, merchantUserId } = req.body;

    // Prepare the payload
    const payload = {
      merchantId: MERCHANT_ID,
      merchantTransactionId: merchantTransactionId,
      merchantUserId: merchantUserId,
      amount: amount * 100, // Convert to paisa
      redirectUrl: `${process.env.FRONTEND_URL}/teleconsult/payment-callback`,
      redirectMode: 'POST',
      callbackUrl: `${process.env.BACKEND_URL}/api/phonepe-callback`,
      paymentInstrument: {
        type: 'PAY_PAGE'
      }
    };

    // Convert payload to base64
    const base64Payload = Buffer.from(JSON.stringify(payload)).toString('base64');

    // Generate X-VERIFY header
    const string = `${base64Payload}/pg/v1/pay${SALT_KEY}`;
    const sha256 = crypto.createHash('sha256').update(string).digest('hex');
    const xVerify = `${sha256}###${SALT_INDEX}`;

    // Make API request to PhonePe
    const response = await axios.post(
      `${API_URL}/pay`,
      {
        request: base64Payload
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-VERIFY': xVerify
        }
      }
    );

    // Return the payment URL to frontend
    res.json({
      success: true,
      redirectUrl: response.data.data.instrumentResponse.redirectInfo.url
    });

  } catch (error) {
    console.error('PhonePe payment creation failed:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

module.exports = router; 