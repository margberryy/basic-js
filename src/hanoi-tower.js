const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let result = {};
  let turns = Math.pow(2,disksNumber)-1;
  let seconds = Math.floor((3600*turns)/turnsSpeed);
 result.turns = turns;
 result.seconds = seconds;
  return result;
};

