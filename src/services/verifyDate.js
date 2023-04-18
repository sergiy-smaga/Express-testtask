const { checkDate } = require("../helpers");
const { getListProviders } = require("../helpers/filesHandlers");

const verifyDate = async (name, date) => {
  const providers = await getListProviders();

  const provider = providers.find(
    (provider) => provider.name.toLowerCase() === name.toLowerCase()
  );

  let isDate;

  if (provider) {
    const { availableDates } = provider;
    isDate = checkDate(availableDates, date);
  }

  return { isDate, provider };
};

module.exports = verifyDate;
