const Subscriber = require('../models/Subscriber');

// @route   POST /api/subscribers  (public — Newsletter.jsx submits here)
const subscribe = async (req, res) => {
    try {
        const { email } = req.body;

        if (!email || !email.trim()) {
            return res.status(400).json({ success: false, message: 'Email is required' });
        }

        const normalizedEmail = email.trim().toLowerCase();
        const exists = await Subscriber.findOne({ email: normalizedEmail });
        if (exists) {
            return res.status(200).json({ success: true, message: 'You are already subscribed — thank you!' });
        }

        await Subscriber.create({ email: normalizedEmail });
        res.status(201).json({ success: true, message: "You're on the list — thank you for coming along." });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @route   GET /api/subscribers  (admin only — for the dashboard count and list)
const getSubscribers = async (req, res) => {
    try {
        const subscribers = await Subscriber.find().sort({ createdAt: -1 });
        res.status(200).json({ success: true, count: subscribers.length, subscribers });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @route   DELETE /api/subscribers/:id  (admin only)
const deleteSubscriber = async (req, res) => {
    try {
        const subscriber = await Subscriber.findByIdAndDelete(req.params.id);
        if (!subscriber) {
            return res.status(404).json({ success: false, message: 'Subscriber not found' });
        }
        res.status(200).json({ success: true, message: 'Subscriber deleted' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { subscribe, getSubscribers, deleteSubscriber };
