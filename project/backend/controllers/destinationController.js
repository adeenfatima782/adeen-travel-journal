const Destination = require('../models/Destination');
const { getPagination, getSort } = require('../utils/queryHelpers');

const slugify = (text) =>
    text.toString().toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');

// @route   GET /api/destinations  (public)
// Query params: ?search=hunza&type=Mountains&budget=Mid-range&sort=-rating&page=1&limit=12
const getDestinations = async (req, res) => {
    try {
        const { search, type, budget } = req.query;
        const { page, limit, skip } = getPagination(req.query);
        const sort = getSort(req.query.sort, '-rating');

        const filter = { published: true };
        if (type) filter.type = type;
        if (budget) filter.budget = budget;
        if (search) {
            filter.$or = [
                { name: { $regex: search, $options: 'i' } },
                { country: { $regex: search, $options: 'i' } },
                { type: { $regex: search, $options: 'i' } },
            ];
        }

        const total = await Destination.countDocuments(filter);
        const destinations = await Destination.find(filter).sort(sort).skip(skip).limit(limit);

        res.status(200).json({ success: true, count: destinations.length, total, page, pages: Math.ceil(total / limit), destinations });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @route   GET /api/destinations/:slug  (public)
const getDestinationBySlug = async (req, res) => {
    try {
        const destination = await Destination.findOne({ slug: req.params.slug });
        if (!destination) return res.status(404).json({ success: false, message: 'Destination not found' });
        res.status(200).json({ success: true, destination });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @route   GET /api/destinations/admin/all  (admin)
const getAllDestinationsForAdmin = async (req, res) => {
    try {
        const destinations = await Destination.find().sort({ createdAt: -1 });
        res.status(200).json({ success: true, count: destinations.length, destinations });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @route   POST /api/destinations  (admin)
const createDestination = async (req, res) => {
    try {
        const body = req.body;
        if (!body.slug && body.name) body.slug = slugify(body.name);
        const destination = await Destination.create(body);
        res.status(201).json({ success: true, destination });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ success: false, message: 'A destination with this slug already exists' });
        }
        res.status(500).json({ success: false, message: error.message });
    }
};

// @route   PUT /api/destinations/:id  (admin)
const updateDestination = async (req, res) => {
    try {
        const destination = await Destination.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!destination) return res.status(404).json({ success: false, message: 'Destination not found' });
        res.status(200).json({ success: true, destination });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @route   DELETE /api/destinations/:id  (admin)
const deleteDestination = async (req, res) => {
    try {
        const destination = await Destination.findByIdAndDelete(req.params.id);
        if (!destination) return res.status(404).json({ success: false, message: 'Destination not found' });
        res.status(200).json({ success: true, message: 'Destination deleted' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    getDestinations,
    getDestinationBySlug,
    getAllDestinationsForAdmin,
    createDestination,
    updateDestination,
    deleteDestination,
};
