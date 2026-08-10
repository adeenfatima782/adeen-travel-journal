// This script inserts the previous static demo content (formerly in samplePosts.js,
// journeys.js, and gallery.js) into MongoDB so the dashboard is not empty and
// every item can be edited or deleted like real content.
//
// Chalane ka tareeqa: npm run import-demo-content
//
// It is safe to run again — existing slugs are skipped, so duplicates are not created.

require('dotenv').config();
const path = require('path');
const mongoose = require('mongoose');

const Post = require('../models/Post');
const Journey = require('../models/Journey');
const Album = require('../models/Album');
const Destination = require('../models/Destination');

const run = async () => {
    console.log('Connecting to MongoDB…');
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected. Reading old static data…');

    // Dynamic import lets this CommonJS script load .mjs (ES module) files
    const { samplePosts, destinations } = await import(
        path.resolve(__dirname, 'source-data/samplePosts.mjs')
    );
    const { journeys } = await import(path.resolve(__dirname, 'source-data/journeys.mjs'));
    const { albums } = await import(path.resolve(__dirname, 'source-data/gallery.mjs'));

    // ---------- Blog Posts ----------
    let postsAdded = 0;
    for (const p of samplePosts) {
        const exists = await Post.findOne({ slug: p.slug });
        if (exists) continue;
        await Post.create({
            title: p.title,
            slug: p.slug,
            excerpt: p.excerpt,
            category: p.category,
            location: p.location,
            cover: p.cover,
            date: p.date,
            tilt: p.tilt,
            content: p.content,
            tags: p.tags || [],
            author: p.author || 'Adeen Fatima',
            readingTime: p.readingTime || 5,
            views: p.views || 0,
            likes: p.likes || 0,
            quote: p.quote || '',
            gallery: p.gallery || [],
            published: true,
        });
        postsAdded++;
    }
    console.log(`Blog posts added: ${postsAdded} (existing posts were skipped)`);

    // ---------- Travel Journal ----------
    let journeysAdded = 0;
    for (const j of journeys) {
        const exists = await Journey.findOne({ slug: j.slug });
        if (exists) continue;
        await Journey.create({
            place: j.place,
            slug: j.slug,
            region: j.region,
            year: j.year,
            date: j.date,
            days: j.days,
            rating: j.rating,
            category: j.category || [],
            weather: j.weather || {},
            lat: j.lat,
            lng: j.lng,
            cover: j.cover,
            gallery: j.gallery || [],
            videoCount: j.videoCount || 0,
            quickFacts: j.quickFacts || {},
            story: j.story || [],
            highlights: j.highlights || [],
            bestMoments: j.bestMoments || [],
            localFood: j.localFood || [],
            travelTips: j.travelTips || [],
            lessonsLearned: j.lessonsLearned || [],
            expenses: j.expenses || [],
            thingsLoved: j.thingsLoved || [],
            recommend: j.recommend || {},
            published: true,
        });
        journeysAdded++;
    }
    console.log(`Journal entries added: ${journeysAdded} (existing entries were skipped)`);

    // ---------- Gallery Albums ----------
    let albumsAdded = 0;
    for (const a of albums) {
        const exists = await Album.findOne({ slug: a.slug });
        if (exists) continue;
        await Album.create({
            slug: a.slug,
            name: a.name,
            region: a.region,
            cover: a.cover,
            description: a.description,
            tags: a.tags || [],
            views: a.views || 0,
            journeyLink: a.journeyLink || '',
            destinationLink: a.destinationLink || '',
            photos: (a.photos || []).map((p) => ({
                src: p.src,
                caption: p.caption,
                location: p.location,
                date: p.date,
                camera: p.camera,
                lens: p.lens,
                iso: p.iso,
                aperture: p.aperture,
                shutter: p.shutter,
                tags: p.tags || [],
                likes: p.likes || 0,
                story: p.story || '',
            })),
            published: true,
        });
        albumsAdded++;
    }
    console.log(`Gallery albums added: ${albumsAdded} (existing albums were skipped)`);

    // ---------- Explore Destinations ----------
    let destinationsAdded = 0;
    for (const d of destinations) {
        const exists = await Destination.findOne({ slug: d.slug });
        if (exists) continue;
        await Destination.create({
            name: d.name,
            slug: d.slug,
            image: d.image,
            country: d.country,
            type: d.type,
            rating: d.rating,
            bestTime: d.bestTime,
            budget: d.budget,
            description: d.description || '',
            difficulty: d.difficulty || '',
            safety: d.safety || 0,
            attractions: d.attractions || [],
            food: d.food || [],
            hotels: d.hotels || [],
            photoSpots: d.photoSpots || {},
            timeline: d.timeline || [],
            weather: d.weather || {},
            published: true,
        });
        destinationsAdded++;
    }
    console.log(`Destinations added: ${destinationsAdded} (existing destinations were skipped)`);

    console.log('\nDone! This content is now visible in the dashboard, where it can be edited or deleted.');
    await mongoose.disconnect();
    process.exit(0);
};

run().catch((err) => {
    console.error('Seeding failed:', err.message);
    process.exit(1);
});
