const Category = require('../models/Category');

const slugify = (text) =>
    text
        .toString()
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

// @route   GET /api/categories?type=blog  (public — toolbars/dropdowns fetch from here)
const getCategories = async (req, res) => {
    try {
        const { type } = req.query;
        const filter = type ? { type } : {};
        const categories = await Category.find(filter).sort({ name: 1 });
        res.status(200).json({ success: true, count: categories.length, categories });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @route   POST /api/categories  (admin only)
const createCategory = async (req, res) => {
    try {
        const { name, type } = req.body;

        if (!name || !type) {
            return res.status(400).json({ success: false, message: 'Both name and type are required' });
        }

        const slug = slugify(name);
        const exists = await Category.findOne({ type, slug });
        if (exists) {
            return res.status(400).json({ success: false, message: 'This category already exists for this page' });
        }

        const category = await Category.create({ name: name.trim(), slug, type });
        res.status(201).json({ success: true, category });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @route   DELETE /api/categories/:id  (admin only)
const deleteCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        if (!category) {
            return res.status(404).json({ success: false, message: 'Category not found' });
        }
        res.status(200).json({ success: true, message: 'Category deleted' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { getCategories, createCategory, deleteCategory };
