const express = require('express');
const router = express.Router();
const { loginAdmin, getMe, getSetupStatus, setupAdmin, updateProfile, changePassword } = require('../controllers/authController');
const { protect } = require('../middleware/auth');
const { authLimiter } = require('../middleware/rateLimiters');
const validate = require('../middleware/validate');
const { loginRules, setupRules, updateProfileRules, changePasswordRules } = require('../validators/authValidators');

router.get('/setup-status', getSetupStatus);
router.post('/setup', authLimiter, setupRules, validate, setupAdmin);
router.post('/login', authLimiter, loginRules, validate, loginAdmin);
router.get('/me', protect, getMe);
router.put('/me', protect, updateProfileRules, validate, updateProfile);
router.put('/change-password', protect, changePasswordRules, validate, changePassword);

module.exports = router;
