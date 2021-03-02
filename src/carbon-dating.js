const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let k = 0.693 / HALF_LIFE_PERIOD;
  let activity = Number(sampleActivity);
  if (typeof sampleActivity === "string" && activity > 0 && activity < 15) {
    let sample_age = Math.ceil(Math.log(MODERN_ACTIVITY / activity) / k);
    return sample_age;
  } else {
    return false;
  }
};

