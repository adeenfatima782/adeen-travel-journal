const { body } = require('express-validator');

const contactRules = [
    body('name').trim().notEmpty().withMessage('Name is required').isLength({ max: 100 }),
    body('email').isEmail().withMessage('A valid email is required').normalizeEmail(),
    body('subject').optional().trim().isLength({ max: 150 }),
    body('message').trim().notEmpty().withMessage('Message is required').isLength({ max: 3000 }).withMessage('Message is too long'),
];

module.exports = { contactRules };
