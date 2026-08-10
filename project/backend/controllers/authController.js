const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Admin = require('../models/Admin');

const generateToken = (admin) => {
    return jwt.sign(
        { id: admin._id },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRE || '7d' }
    );
};

// @route   GET /api/auth/setup-status  (public — checks whether setup is pending or complete)
const getSetupStatus = async (req, res) => {
    try {
        const count = await Admin.countDocuments();
        res.status(200).json({ success: true, setupDone: count > 0 });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @route   POST /api/auth/setup  (public — but only works while no admin exists)
// Once an account is created, this route is permanently disabled.
const setupAdmin = async (req, res) => {
    try {
        const existingCount = await Admin.countDocuments();
        if (existingCount > 0) {
            return res.status(403).json({ success: false, message: 'Setup is already complete — this route is now disabled.' });
        }

        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: 'Name, email, and password are required' });
        }
        if (password.length < 6) {
            return res.status(400).json({ success: false, message: 'Password must be at least 6 characters long' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const admin = await Admin.create({ name, email, password: hashedPassword });

        const token = generateToken(admin);

        res.status(201).json({
            success: true,
            token,
            admin: { id: admin._id, name: admin.name, email: admin.email },
        });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ success: false, message: 'An account with this email already exists' });
        }
        res.status(500).json({ success: false, message: error.message });
    }
};

// @route   POST /api/auth/login  (public)
const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ success: false, message: 'Email and password are required' });
        }

        const admin = await Admin.findOne({ email }).select('+password');
        if (!admin) {
            return res.status(401).json({ success: false, message: 'Invalid email or password' });
        }

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: 'Invalid email or password' });
        }

        const token = generateToken(admin);

        res.status(200).json({
            success: true,
            token,
            admin: {
                id: admin._id,
                name: admin.name,
                email: admin.email,
            },
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @route   GET /api/auth/me  (protected)
const getMe = async (req, res) => {
    try {
        const admin = await Admin.findById(req.admin.id);
        if (!admin) {
            return res.status(404).json({ success: false, message: 'Admin not found' });
        }
        res.status(200).json({ success: true, admin });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @route   PUT /api/auth/me  (protected — Profile page)
const updateProfile = async (req, res) => {
    try {
        const { name, email } = req.body;
        const update = {};
        if (name) update.name = name;
        if (email) update.email = email;

        const admin = await Admin.findByIdAndUpdate(req.admin.id, update, { new: true, runValidators: true });
        if (!admin) {
            return res.status(404).json({ success: false, message: 'Admin not found' });
        }
        res.status(200).json({ success: true, admin });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ success: false, message: 'An account with this email already exists' });
        }
        res.status(500).json({ success: false, message: error.message });
    }
};

// @route   PUT /api/auth/change-password  (protected — Settings page)
const changePassword = async (req, res) => {
    try {
        const { currentPassword, newPassword } = req.body;

        const admin = await Admin.findById(req.admin.id).select('+password');
        if (!admin) {
            return res.status(404).json({ success: false, message: 'Admin not found' });
        }

        const isMatch = await bcrypt.compare(currentPassword, admin.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: 'Current password is incorrect' });
        }

        const salt = await bcrypt.genSalt(10);
        admin.password = await bcrypt.hash(newPassword, salt);
        await admin.save();

        res.status(200).json({ success: true, message: 'Password changed' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { loginAdmin, getMe, getSetupStatus, setupAdmin, updateProfile, changePassword };
