const checkDate = (intervals, date) =>
  intervals.some((interval) => date >= interval.from && date <= interval.to);

module.exports = checkDate;
