require('dotenv').config();
const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const contactRoutes = require('./routes/contactRoutes');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
const galleryRoutes = require('./routes/galleryRoutes');
const journeyRoutes = require('./routes/journeyRoutes');
const destinationRoutes = require('./routes/destinationRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const subscriberRoutes = require('./routes/subscriberRoutes');
const path = require('path');
const { generalLimiter } = require('./middleware/rateLimiters');

// Connect to the database
connectToMongo();

const app = express();
const port = process.env.PORT || 5000;

app.set('trust proxy', 1);



app.use(helmet({ crossOriginResourcePolicy: false })); // Security headers — disable crossOriginResourcePolicy so frontend can load /uploads images

// In production, allow only FRONTEND_URL (from .env); allow all origins in local development (undefined origin also allows same-origin/Postman)
const allowedOrigin = process.env.FRONTEND_URL;
app.use(
    cors({
        origin: allowedOrigin ? allowedOrigin : true,
    })
);
app.use(express.json()); // Parse req.body
app.use('/api', generalLimiter); // Rate-limit all /api routes
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve uploaded images

// Main route (for testing)
app.get('/', (req, res) => {
    res.send('Backend Server is Running!');
});

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/journeys', journeyRoutes);
app.use('/api/destinations', destinationRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/subscribers', subscriberRoutes);

// Handle unmatched routes
app.use((req, res) => {
    res.status(404).json({ success: false, message: 'Route not found' });
});

// Global error handler (handles errors thrown by any controller)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || 'Server Error',
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
