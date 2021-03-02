const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  let seasons = ['winter', 'spring', 'summer', 'autumn'];
  if (!date) {
    return 'Unable to determine the time of year!';
  } else if (date.getUTCMonth() <= 1 || date.getUTCMonth() === 11) {
    return seasons[0];
  } else if (date.getUTCMonth() >= 2 && date.getUTCMonth() <= 4) {
    return seasons[1];
  } else if (date.getUTCMonth() >= 5 && date.getUTCMonth() <= 7) {
    return seasons[2];
  } else if (date.getUTCMonth() >= 8 && date.getUTCMonth() <= 10) {
    return seasons[3];
  }
};
