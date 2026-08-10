// Usage: node seed/createAdmin.js "Adeen Fatima" you@email.com yourpassword123
// Run this script only once to create the admin account.
// The public /register route has been removed for security.

require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Admin = require('../models/Admin');

const [name, email, password] = process.argv.slice(2);

if (!name || !email || !password) {
    console.log('❌ Usage: node seed/createAdmin.js "Your Name" you@email.com yourpassword');
    process.exit(1);
}

const run = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        const existing = await Admin.findOne({ email });
        if (existing) {
            console.log('⚠️  An admin with this email already exists:', email);
            process.exit(0);
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const admin = await Admin.create({ name, email, password: hashedPassword });
        console.log('✅ Admin account created! Log in at /admin/login with this email and password:');
        console.log('   Email:', admin.email);
        process.exit(0);
    } catch (error) {
        console.error('❌ Error:', error.message);
        process.exit(1);
    }
};

run();
