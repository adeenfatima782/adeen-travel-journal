const mongoose = require('mongoose');

// A single model; the "type" field determines which page the category is for
// (blog, journal, gallery), allowing new categories to be added from the admin
// panel without changing code.
const CategorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Category name is required'],
            trim: true,
        },
        slug: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
        },
        type: {
            type: String,
            required: true,
            enum: ['blog', 'journal', 'gallery'],
        },
    },
    { timestamps: true }
);

// Ek type ke andar same slug do baar na ho
CategorySchema.index({ type: 1, slug: 1 }, { unique: true });

module.exports = mongoose.model('Category', CategorySchema);
