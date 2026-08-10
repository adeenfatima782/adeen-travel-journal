const express = require('express');
const router = express.Router();
const {
    getJourneys,
    getJourneyBySlug,
    getAllJourneysForAdmin,
    createJourney,
    updateJourney,
    deleteJourney,
} = require('../controllers/journeyController');
const { protect } = require('../middleware/auth');
const validate = require('../middleware/validate');
const { journeyRules } = require('../validators/contentValidators');

router.get('/admin/all', protect, getAllJourneysForAdmin);

router.get('/', getJourneys);
router.get('/:slug', getJourneyBySlug);

router.post('/', protect, journeyRules, validate, createJourney);
router.put('/:id', protect, updateJourney);
router.delete('/:id', protect, deleteJourney);

module.exports = router;
