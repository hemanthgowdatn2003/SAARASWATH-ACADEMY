const { errorResponse } = require('../utils/apiResponse');

const adminMiddleware = (req, res, next) => {
  if (!req.user) {
    return errorResponse(res, 'Authentication required', 401);
  }
  // Allow admin and superadmin roles
  if (req.user.role === 'admin' || req.user.role === 'superadmin') {
    return next();
  }
  return errorResponse(res, 'Forbidden: Admin access privileges required', 403);
};

module.exports = adminMiddleware;
