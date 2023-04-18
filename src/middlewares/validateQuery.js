const { RequestError } = require("../helpers");

const validateQuery = (schema) => {
  const func = async (req, res, next) => {
    const { error } = schema.validate(req.query);
    if (error) {
      next(RequestError(400, error.message));
    }
    next();
  };

  return func;
};

module.exports = validateQuery;
