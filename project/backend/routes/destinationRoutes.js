const express = require('express');
const router = express.Router();
const {
    getDestinations,
    getDestinationBySlug,
    getAllDestinationsForAdmin,
    createDestination,
    updateDestination,
    deleteDestination,
} = require('../controllers/destinationController');
const { protect } = require('../middleware/auth');
const validate = require('../middleware/validate');
const { destinationRules } = require('../validators/contentValidators');

router.get('/admin/all', protect, getAllDestinationsForAdmin);

router.get('/', getDestinations);
router.get('/:slug', getDestinationBySlug);

router.post('/', protect, destinationRules, validate, createDestination);
router.put('/:id', protect, updateDestination);
router.delete('/:id', protect, deleteDestination);

module.exports = router;
