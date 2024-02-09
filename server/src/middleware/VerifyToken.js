const jwt = require('jsonwebtoken');
const { secret } = require('../helper/config');

// Middleware for token verification
const VerifyToken = (request, response, next) => {
  const token = request?.headers?.authorization?.split(' ')?.[1];
  if (!token) {
    const error = new Error('Not authenticated.');
    error.statusCode = 401;
    throw error;
  }

  jwt.verify(token, secret, (error, decoded) => {
    if (error) {
      const error = new Error('Failed to authenticate token.');
      error.statusCode = 403;
      throw error;
    }
    request.userDetails = decoded?.user;
    next();
  });
};

module.exports = { VerifyToken };