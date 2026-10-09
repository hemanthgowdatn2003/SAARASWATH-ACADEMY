const logger = require('../utils/logger');
const { errorResponse } = require('../utils/apiResponse');

const errorMiddleware = (err, req, res, next) => {
  logger.error(`Error processing ${req.method} ${req.url}:`, err.message);

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  return errorResponse(res, message, statusCode, process.env.NODE_ENV === 'development' ? err.stack : null);
};

module.exports = errorMiddleware;
