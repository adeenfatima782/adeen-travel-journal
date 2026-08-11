

require('dotenv').config();
const mongoose = require('mongoose');

const Post = require('../models/Post');
const Album = require('../models/Album');
const Journey = require('../models/Journey');
const Destination = require('../models/Destination');

const isFixable = (url) => typeof url === 'string' && url.startsWith('http://') && url.includes('/uploads/');
const toHttps = (url) => url.replace(/^http:\/\//, 'https://');

const run = async () => {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected. Scanning for insecure (http://) upload URLs…');

    let fixedCount = 0;

    // Posts: cover field
    const posts = await Post.find({ cover: { $regex: '^http://.*\\/uploads\\/' } });
    for (const post of posts) {
        post.cover = toHttps(post.cover);
        await post.save();
        fixedCount++;
    }

    // Journeys: cover field
    const journeys = await Journey.find({ cover: { $regex: '^http://.*\\/uploads\\/' } });
    for (const journey of journeys) {
        journey.cover = toHttps(journey.cover);
        await journey.save();
        fixedCount++;
    }

    // Destinations: image field
    const destinations = await Destination.find({ image: { $regex: '^http://.*\\/uploads\\/' } });
    for (const dest of destinations) {
        dest.image = toHttps(dest.image);
        await dest.save();
        fixedCount++;
    }

    // Albums: cover field + every photo's src field
    const albums = await Album.find({});
    for (const album of albums) {
        let changed = false;
        if (isFixable(album.cover)) {
            album.cover = toHttps(album.cover);
            changed = true;
        }
        album.photos.forEach((photo) => {
            if (isFixable(photo.src)) {
                photo.src = toHttps(photo.src);
                changed = true;
            }
        });
        if (changed) {
            await album.save();
            fixedCount++;
        }
    }

    console.log(`✅ Done — ${fixedCount} record(s) fix ho gaye.`);
    process.exit(0);
};

run().catch((err) => {
    console.error('❌ Error:', err.message);
    process.exit(1);
});