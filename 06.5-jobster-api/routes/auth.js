const express = require('express');
const router = express.Router();
const authenticateUser = require('../middleware/authentication');
const testUser = require('../middleware/testUser');

const rateLimiter = require('express-rate-limit');
const apiLimiter = rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 10,
    message: {
        msg: 'Too many requests.',
    },
});

const { register, login, updateUser } = require('../controllers/auth');
router.post('/register', register);
router.post('/login', login);
router.patch('/updateUser', authenticateUser, testUser, updateUser);
module.exports = router;
