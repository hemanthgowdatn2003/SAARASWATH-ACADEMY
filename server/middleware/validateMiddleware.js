const { errorResponse } = require('../utils/apiResponse');

const validateMiddleware = (validatorFn) => {
  return (req, res, next) => {
    const { isValid, errors } = validatorFn(req.body);
    if (!isValid) {
      return errorResponse(res, 'Validation error in request payload', 400, errors);
    }
    next();
  };
};

module.exports = validateMiddleware;
