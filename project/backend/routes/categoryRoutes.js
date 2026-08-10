const express = require('express');
const router = express.Router();
const { getCategories, createCategory, deleteCategory } = require('../controllers/categoryController');
const { protect } = require('../middleware/auth');

// Public — Blog/Journal/Gallery toolbars and admin dropdowns fetch from here
router.get('/', getCategories);

// Admin only — admin dashboard ka Categories tab
router.post('/', protect, createCategory);
router.delete('/:id', protect, deleteCategory);

module.exports = router;
