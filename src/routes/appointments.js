const express = require("express");
const ctrl = require("../controllers/appointments");
const { ctrlWrapper } = require("../helpers");
const { validateBody, validateQuery } = require("../middlewares");
const {
  setAppointmentSchema,
  getAppointmentSchema,
} = require("../models/appointments.js");

const router = express.Router();

router.get(
  "/",
  validateQuery(getAppointmentSchema),
  ctrlWrapper(ctrl.getAppointments)
);

router.post(
  "/",
  validateBody(setAppointmentSchema),
  ctrlWrapper(ctrl.postAppointment)
);

module.exports = router;
