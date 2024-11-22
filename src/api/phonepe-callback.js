const express = require('express');
const router = express.Router();
const crypto = require('crypto');
require('dotenv').config();

const SALT_KEY = process.env.PHONEPE_SALT_KEY;
const SALT_INDEX = process.env.PHONEPE_SALT_INDEX;

router.post('/phonepe-callback', async (req, res) => {
  try {
    // Verify the callback signature
    const payload = req.body;
    const xVerify = req.headers['x-verify'];
    const [receivedHash, receivedIndex] = xVerify.split('###');

    // Generate hash for verification
    const string = `${JSON.stringify(payload)}${SALT_KEY}`;
    const sha256 = crypto.createHash('sha256').update(string).digest('hex');

    // Verify signature
    if (sha256 === receivedHash && receivedIndex === SALT_INDEX) {
      // Payment successful
      if (payload.code === 'PAYMENT_SUCCESS') {
        // Update your database with payment status
        // Send success response
        res.json({
          success: true,
          message: 'Payment successful'
        });
      } else {
        // Payment failed
        res.json({
          success: false,
          message: 'Payment failed'
        });
      }
    } else {
      // Invalid signature
      res.status(400).json({
        success: false,
        message: 'Invalid signature'
      });
    }
  } catch (error) {
    console.error('PhonePe callback processing failed:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

module.exports = router; 