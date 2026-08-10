const { body } = require('express-validator');

const postRules = [
    body('title').trim().notEmpty().withMessage('Title is required'),
    body('excerpt').trim().notEmpty().withMessage('Excerpt is required'),
    body('cover').trim().notEmpty().withMessage('Cover image is required'),
    body('category').trim().notEmpty().withMessage('Category is required'),
];

const albumRules = [
    body('name').trim().notEmpty().withMessage('Album name is required'),
    body('cover').trim().notEmpty().withMessage('Cover image is required'),
];

const journeyRules = [
    body('place').trim().notEmpty().withMessage('Place is required'),
    body('cover').trim().notEmpty().withMessage('Cover image is required'),
];

const destinationRules = [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('image').trim().notEmpty().withMessage('Image is required'),
];

module.exports = { postRules, albumRules, journeyRules, destinationRules };
