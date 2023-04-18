const { checkDate } = require("../helpers");
const { getListProviders } = require("../helpers/filesHandlers");

const searchProviders = async (specialty, date, minScore) => {
  const providers = await getListProviders();

  const filteredProvider = providers
    .filter((provider) => {
      const { specialties, score, availableDates } = provider;

      const isSpecialty = specialties.some(
        (item) => item.toLowerCase() === specialty.toLowerCase()
      );
      const isDate = checkDate(availableDates, date);
      const isMinScore = score >= minScore;

      return isSpecialty && isDate && isMinScore;
    })
    .sort((a, b) => b.score - a.score)
    .map((provider) => provider.name);

  return filteredProvider;
};

module.exports = searchProviders;
