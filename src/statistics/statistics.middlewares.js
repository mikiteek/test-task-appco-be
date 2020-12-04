const Joi = require("joi");

const validateDateFilterParamsMiddleware = (req, res, next) => {
  const {query: {dateFrom, dateTo}} = req;
  if (!dateFrom && !dateTo) {
    return next();
  }
  const validationSchema = Joi.date();
  if (dateFrom) {
    const validationResult = validationSchema.validate(dateFrom);
    if (validationResult.error) {
      return res.status(400).send(validationResult.error.details);
    }
  }
  if (dateTo) {
    const validationResult = validationSchema.validate(dateTo);
    if (validationResult.error) {
      return res.status(400).send(validationResult.error.details);
    }
  }
  next();
}

module.exports = {
  validateDateFilterParamsMiddleware,
}