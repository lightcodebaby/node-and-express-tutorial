const { BadRequest } = require('../errors');

const {
    testUser,
} = (req, res, next) => {
    if (req.user.isTestUser) {
        throw new BadRequest('Test User. Read only.');
    }
};

module.exports = testUser;
