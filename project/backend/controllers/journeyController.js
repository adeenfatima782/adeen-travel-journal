const Journey = require('../models/Journey');
const { getPagination, getSort } = require('../utils/queryHelpers');

const slugify = (text) =>
    text.toString().toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');

// @route   GET /api/journeys  (public)
// Query params: ?search=murree&category=Mountains&year=2024&sort=-rating&page=1&limit=12
const getJourneys = async (req, res) => {
    try {
        const { search, category, year } = req.query;
        const { page, limit, skip } = getPagination(req.query);
        const sort = getSort(req.query.sort, '-date');

        const filter = { published: true };
        if (category) filter.category = category;
        if (year) filter.year = Number(year);
        if (search) {
            filter.$or = [
                { place: { $regex: search, $options: 'i' } },
                { region: { $regex: search, $options: 'i' } },
                { category: { $regex: search, $options: 'i' } },
            ];
        }

        const total = await Journey.countDocuments(filter);
        const journeys = await Journey.find(filter).sort(sort).skip(skip).limit(limit);

        res.status(200).json({ success: true, count: journeys.length, total, page, pages: Math.ceil(total / limit), journeys });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @route   GET /api/journeys/:slug  (public)
const getJourneyBySlug = async (req, res) => {
    try {
        const journey = await Journey.findOne({ slug: req.params.slug });
        if (!journey) return res.status(404).json({ success: false, message: 'Journey not found' });
        res.status(200).json({ success: true, journey });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @route   GET /api/journeys/admin/all  (admin)
const getAllJourneysForAdmin = async (req, res) => {
    try {
        const journeys = await Journey.find().sort({ createdAt: -1 });
        res.status(200).json({ success: true, count: journeys.length, journeys });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @route   POST /api/journeys  (admin)
const createJourney = async (req, res) => {
    try {
        const body = req.body;
        if (!body.slug && body.place) body.slug = slugify(body.place);
        const journey = await Journey.create(body);
        res.status(201).json({ success: true, journey });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ success: false, message: 'A journey with this slug already exists' });
        }
        res.status(500).json({ success: false, message: error.message });
    }
};

// @route   PUT /api/journeys/:id  (admin)
const updateJourney = async (req, res) => {
    try {
        const journey = await Journey.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!journey) return res.status(404).json({ success: false, message: 'Journey not found' });
        res.status(200).json({ success: true, journey });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @route   DELETE /api/journeys/:id  (admin)
const deleteJourney = async (req, res) => {
    try {
        const journey = await Journey.findByIdAndDelete(req.params.id);
        if (!journey) return res.status(404).json({ success: false, message: 'Journey not found' });
        res.status(200).json({ success: true, message: 'Journey deleted' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    getJourneys,
    getJourneyBySlug,
    getAllJourneysForAdmin,
    createJourney,
    updateJourney,
    deleteJourney,
};
