const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
            trim: true,
        },
        username: {
            type: String,
            required: [true, 'Username is required'],
            unique: true,
            trim: true,
            lowercase: true,
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
            trim: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
            minlength: 6,
            select: false, // Password is excluded from queries by default
        },
        role: {
            type: String,
            enum: ['admin', 'user'],
            default: 'user', // Manually assign yourself the "admin" role in the database only
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
