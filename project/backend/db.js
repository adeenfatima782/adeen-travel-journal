const mongoose = require('mongoose');

// The URI is now read from the .env file (for security — never
// write the password directly in code when pushing to GitHub)
const mongoURI = process.env.MONGO_URI;

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB Successfully! 🎉");
    } catch (error) {
        console.error("MongoDB Connection Failed ❌:", error.message);
        process.exit(1); // Do not start the server if the database cannot connect
    }
};

module.exports = connectToMongo;
