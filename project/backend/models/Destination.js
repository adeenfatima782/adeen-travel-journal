const mongoose = require('mongoose');

const DestinationSchema = new mongoose.Schema(
    {
        slug: {
            type: String,
            required: [true, 'Slug is required'],
            unique: true,
            lowercase: true,
            trim: true,
        },
        name: {
            type: String,
            required: [true, 'Destination name is required'],
            trim: true,
        },
        image: {
            type: String,
            required: [true, 'Image is required'],
        },
        country: { type: String, default: 'Pakistan' },
        type: { type: String, default: '' }, // Mountains, Lakes, Valleys, etc.
        rating: { type: Number, default: 4.5, min: 0, max: 5 },
        bestTime: { type: String, default: '' },
        budget: { type: String, default: 'Mid-range' }, // Budget / Mid-range / Luxury
        description: { type: String, default: '' },

        difficulty: { type: String, default: 'Easy' }, // Easy / Medium / Hard
        safety: { type: Number, default: 5, min: 0, max: 5 }, // star rating

        attractions: { type: [String], default: [] },

        food: {
            type: [{ name: { type: String, required: true }, note: { type: String, default: '' } }],
            default: [],
        },

        hotels: {
            type: [
                {
                    name: { type: String, required: true },
                    tier: { type: String, default: 'Mid-range' }, // Budget / Mid-range / Luxury
                    note: { type: String, default: '' },
                },
            ],
            default: [],
        },

        photoSpots: {
            sunrise: { type: String, default: '' },
            sunset: { type: String, default: '' },
            goldenHour: { type: String, default: '' },
            droneAllowed: { type: Boolean, default: false },
            cameraTip: { type: String, default: '' },
        },

        timeline: {
            type: [{ day: { type: Number, required: true }, plan: { type: String, required: true } }],
            default: [],
        },

        weather: {
            condition: { type: String, default: '' },
            high: { type: Number },
            low: { type: Number },
            icon: { type: String, default: 'bi-sun' },
        },

        // For the Best Time To Visit component — guidance by season
        seasonalGuide: {
            Spring: { type: String, default: '' },
            Summer: { type: String, default: '' },
            Winter: { type: String, default: '' },
        },

        // For the Route Information component
        route: {
            title: { type: String, default: '' },
            steps: { type: [String], default: [] },
        },

        // Coordinates for the map placeholder
        lat: { type: Number },
        lng: { type: Number },

        published: { type: Boolean, default: true },
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);

module.exports = mongoose.model('Destination', DestinationSchema);
