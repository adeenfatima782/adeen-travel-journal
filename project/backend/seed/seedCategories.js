// Usage: node seed/seedCategories.js
// Inserts the previously hardcoded category lists from the frontend data files
// into the database so the admin panel works immediately and existing
// post, journey, and album filters continue to work.

require('dotenv').config();
const mongoose = require('mongoose');
const Category = require('../models/Category');

const slugify = (text) =>
    text
        .toString()
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

const defaults = [
    // Blog page (previously hardcoded in frontend/src/data/samplePosts.js)
    { name: 'Travel Diaries', type: 'blog' },
    { name: 'Photography', type: 'blog' },
    { name: 'Gallery', type: 'blog' },

    // Travel Journal page (previously hardcoded in frontend/src/data/journeys.js)
    { name: 'Family Trips', type: 'journal' },
    { name: 'Adventure', type: 'journal' },
    { name: 'Road Trips', type: 'journal' },
    { name: 'Mountains', type: 'journal' },
    { name: 'Lakes', type: 'journal' },
    { name: 'Forest', type: 'journal' },
    { name: 'Winter Trips', type: 'journal' },
    { name: 'Summer Trips', type: 'journal' },

    // Gallery page (previously hardcoded in frontend/src/data/gallery.js)
    { name: 'Mountains', type: 'gallery' },
    { name: 'Lakes', type: 'gallery' },
    { name: 'Rivers', type: 'gallery' },
    { name: 'Waterfalls', type: 'gallery' },
    { name: 'Forest', type: 'gallery' },
    { name: 'Wildlife', type: 'gallery' },
    { name: 'Sunrise', type: 'gallery' },
    { name: 'Sunset', type: 'gallery' },
    { name: 'Night', type: 'gallery' },
    { name: 'Food', type: 'gallery' },
    { name: 'Culture', type: 'gallery' },
    { name: 'Road Trips', type: 'gallery' },
    { name: 'Drone', type: 'gallery' },
];

const run = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        let added = 0;
        for (const item of defaults) {
            const slug = slugify(item.name);
            const exists = await Category.findOne({ type: item.type, slug });
            if (!exists) {
                await Category.create({ name: item.name, slug, type: item.type });
                added++;
            }
        }

        console.log(`✅ Done — ${added} new categories added (the rest already existed).`);
        process.exit(0);
    } catch (error) {
        console.error('❌ Error:', error.message);
        process.exit(1);
    }
};

run();
