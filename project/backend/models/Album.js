const mongoose = require('mongoose');

const PhotoSchema = new mongoose.Schema(
    {
        src: { type: String, required: true },
        caption: { type: String, default: '' },
        location: { type: String, default: '' },
        date: { type: Date },
        camera: { type: String, default: '' },
        lens: { type: String, default: '' },
        iso: { type: String, default: '' },
        aperture: { type: String, default: '' },
        shutter: { type: String, default: '' },
        tags: { type: [String], default: [] },
        likes: { type: Number, default: 0 },
        story: { type: String, default: '' },
    },
    {
        _id: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);

const AlbumSchema = new mongoose.Schema(
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
            required: [true, 'Album name is required'],
            trim: true,
        },
        region: { type: String, default: '' },
        cover: {
            type: String,
            required: [true, 'Cover image is required'],
        },
        description: { type: String, default: '' },
        tags: { type: [String], default: [] },
        views: { type: Number, default: 0 },
        journeyLink: { type: String, default: '' }, // related travel journal entry
        destinationLink: { type: String, default: '' },
        photos: { type: [PhotoSchema], default: [] },
        published: { type: Boolean, default: true },
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);

module.exports = mongoose.model('Album', AlbumSchema);
