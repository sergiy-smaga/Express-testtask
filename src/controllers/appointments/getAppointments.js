const { searchProviders } = require("../../services");

const getAppointments = async (req, res) => {
  const { specialty, date, minScore } = req.query;
  const searchResult = await searchProviders(specialty, date, minScore);
  res.status(200).json(searchResult);
};

module.exports = getAppointments;
