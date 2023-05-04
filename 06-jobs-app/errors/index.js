'use strict';
const CustomAPIError = require('./custom-error');
const BadRequestError = require('./bad-request');
const UnauthorizedError = require('./unauthorized');

module.exports = {
    CustomAPIError,
    BadRequestError,
    UnauthorizedError,
};
