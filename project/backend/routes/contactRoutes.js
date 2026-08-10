const express = require('express');
const router = express.Router();
const {
    submitContact,
    getAllContacts,
    markAsRead,
    deleteContact,
} = require('../controllers/contactController');
const { protect } = require('../middleware/auth');
const { contactLimiter } = require('../middleware/rateLimiters');
const validate = require('../middleware/validate');
const { contactRules } = require('../validators/contactValidators');

// Public — ContactForm.jsx calls this route
router.post('/', contactLimiter, contactRules, validate, submitContact);

// Admin only — admin dashboard messages tab
router.get('/', protect, getAllContacts);
router.patch('/:id/read', protect, markAsRead);
router.delete('/:id', protect, deleteContact);

module.exports = router;
