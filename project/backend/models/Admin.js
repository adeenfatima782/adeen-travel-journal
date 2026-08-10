const mongoose = require('mongoose');

// This website is operated by one person (Adeen), so a "role" field is
// unnecessary — there is one Admin collection containing a single document.
const AdminSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
            trim: true,
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
            select: false,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Admin', AdminSchema);
