const express = require('express');
const router = express.Router();
const { subscribe, getSubscribers, deleteSubscriber } = require('../controllers/subscriberController');
const { protect } = require('../middleware/auth');
const { subscribeLimiter } = require('../middleware/rateLimiters');

// Public — Newsletter.jsx submits here
router.post('/', subscribeLimiter, subscribe);

// Admin only — admin dashboard ka Subscribers tab
router.get('/', protect, getSubscribers);
router.delete('/:id', protect, deleteSubscriber);

module.exports = router;
