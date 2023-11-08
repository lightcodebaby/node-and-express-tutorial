const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { UnauthenticatedError } = require('../errors');

const auth = async (req, res, next) => {
    // check header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer')) {
        throw new UnauthenticatedError('Authentication invalid');
    }
    const token = authHeader.split(' ')[1];

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        // attach the user to the job routes
        const isTestUser = payload.userId === '65491c12bd6bb563b3986fd5';
        req.user = { userId: payload.userId, isTestUser };
        next();
    } catch (error) {
        throw new UnauthenticatedError('Authentication invalid');
    }
};

module.exports = auth;
