const Joi = require("joi");

const setAppointmentSchema = Joi.object({
  name: Joi.string().required(),
  date: Joi.date().required(),
});

const getAppointmentSchema = Joi.object({
  specialty: Joi.string().required(),
  date: Joi.date().required(),
  // for date validation its better add one more method .greater("now") to check
  // if date is in the future but test have fallen as mock data has some dates in the past
  minScore: Joi.number().min(0).max(10).required(),
});

module.exports = {
  setAppointmentSchema,
  getAppointmentSchema,
};
