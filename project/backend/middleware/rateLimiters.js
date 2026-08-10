const rateLimit = require('express-rate-limit');

// General limit for the entire API — protects against spam and abuse
const generalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 300,
    standardHeaders: true,
    legacyHeaders: false,
    message: { success: false, message: 'Too many requests — please try again shortly.' },
});

// Login/setup pe zyada sakht limit — brute-force password guessing rokta hai
const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
    standardHeaders: true,
    legacyHeaders: false,
    message: { success: false, message: 'Too many login attempts — please try again in 15 minutes.' },
});

// Contact form pe bhi halka sa limit — spam submissions rokta hai
const contactLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 10,
    standardHeaders: true,
    legacyHeaders: false,
    message: { success: false, message: 'Too many messages sent — please try again shortly.' },
});

// Newsletter subscribe pe halka sa limit — spam signups rokta hai
const subscribeLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 15,
    standardHeaders: true,
    legacyHeaders: false,
    message: { success: false, message: 'Too many attempts — please try again shortly.' },
});

module.exports = { generalLimiter, authLimiter, contactLimiter, subscribeLimiter };
