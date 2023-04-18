const { verifyDate } = require("../../services");
const { RequestError } = require("../../helpers");

const postAppointment = async (req, res) => {
  const { name, date } = req.body;
  const { isDate, provider } = await verifyDate(name, date);
  if (!isDate) {
    throw RequestError(400, "Date is not available");
  }
  if (!provider) {
    throw RequestError(400, "Provider not found");
  }
  // create appointment to database
  res.status(200).json({ message: "Appointment created" });
};

module.exports = postAppointment;
