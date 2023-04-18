const fs = require("fs/promises");
const path = require("path");

const providersPath = path.join(
  __dirname,
  "../../",
  "providers/providers.json"
);

// get list providers could be replaced with other method for getting complete list of providers
// e.g. from database or from another server
const getListProviders = async () => {
  const result = await fs.readFile(providersPath);
  return JSON.parse(result);
};

module.exports = {
  getListProviders,
};
