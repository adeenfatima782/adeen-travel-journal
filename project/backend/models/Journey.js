const mongoose = require('mongoose');

const JourneySchema = new mongoose.Schema(
    {
        slug: {
            type: String,
            required: [true, 'Slug is required'],
            unique: true,
            lowercase: true,
            trim: true,
        },
        place: {
            type: String,
            required: [true, 'Place name is required'],
            trim: true,
        },
        region: { type: String, default: '' },
        year: { type: Number },
        date: { type: Date, default: Date.now },
        days: { type: Number, default: 1 },
        rating: { type: Number, default: 4.5, min: 0, max: 5 },
        category: { type: [String], default: [] },
        weather: {
            condition: { type: String, default: '' },
            high: { type: Number },
            low: { type: Number },
            icon: { type: String, default: 'bi-cloud-sun' },
        },
        lat: { type: Number },
        lng: { type: Number },
        cover: {
            type: String,
            required: [true, 'Cover image is required'],
        },
        gallery: {
            type: [{ src: { type: String, required: true }, caption: { type: String, default: '' } }],
            default: [],
        },
        videoCount: { type: Number, default: 0 },
        quickFacts: {
            altitude: { type: String, default: '' },
            distance: { type: String, default: '' },
            difficulty: { type: String, default: '' },
            bestTime: { type: String, default: '' },
        },
        story: { type: [String], default: [] }, // paragraphs
        highlights: { type: [String], default: [] },
        bestMoments: { type: [String], default: [] },
        localFood: {
            type: [{ name: { type: String, required: true }, note: { type: String, default: '' } }],
            default: [],
        },
        travelTips: { type: [String], default: [] },
        lessonsLearned: { type: [String], default: [] },
        expenses: {
            type: [{ item: { type: String, required: true }, amount: { type: String, default: '' } }],
            default: [],
        },
        thingsLoved: { type: [String], default: [] },
        recommend: {
            rating: { type: Number, default: 5 },
            verdict: { type: String, default: '' },
        },
        published: { type: Boolean, default: true },
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);

module.exports = mongoose.model('Journey', JourneySchema);
