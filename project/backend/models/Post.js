const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Title is required'],
            trim: true,
        },
        slug: {
            type: String,
            required: [true, 'Slug is required'],
            unique: true,
            lowercase: true,
            trim: true,
        },
        excerpt: {
            type: String,
            required: [true, 'Excerpt is required'],
        },
        category: {
            // This was previously a hardcoded enum; it is now dynamic, with new categories
            // added through the admin panel from the Category collection (type: 'blog').
            type: String,
            required: true,
            trim: true,
        },
        location: {
            type: String,
            default: '',
        },
        cover: {
            type: String, // image URL
            required: [true, 'Cover image is required'],
        },
        date: {
            type: Date,
            default: Date.now,
        },
        tilt: {
            type: String,
            default: '-2deg', // Small random rotation for the frontend design
        },
        content: {
            type: [String], // paragraphs ka array — jaisa samplePosts.js mein hai
            required: true,
        },
        tags: {
            type: [String],
            default: [],
        },
        author: {
            type: String,
            default: 'Adeen Fatima',
        },
        readingTime: {
            type: Number, // minutes
            default: 5,
        },
        views: {
            type: Number,
            default: 0,
        },
        likes: {
            type: Number,
            default: 0,
        },
        shares: {
            type: Number,
            default: 0,
        },
        quote: {
            type: String,
            default: '',
        },
        gallery: {
            type: [
                {
                    src: { type: String, required: true },
                    caption: { type: String, default: '' },
                },
            ],
            default: [],
        },
        published: {
            type: Boolean,
            default: true,
        },
        author_ref: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Admin',
        },
    },
    {
        timestamps: true,
        toJSON: { virtuals: true }, // Allows the frontend to use post.id in addition to post._id
        toObject: { virtuals: true },
    }
);

module.exports = mongoose.model('Post', PostSchema);
