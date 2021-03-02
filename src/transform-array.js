const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let transformArr = [];
  if (!Array.isArray(arr)) {
    throw "Error";
  };
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--double-prev') {
      if (i === 0 || arr[i - 2] === '--discard-next') {
        continue;
      } else {
        transformArr.push(arr[i - 1]);
      }
    } else if (arr[i] === '--double-next') {
      if (arr[i + 1] === undefined) {
        break;
      } else {
        transformArr.push(arr[i + 1]);
      }
    } else if (arr[i] === '--discard-prev') {
      if (i === 0 || arr[i - 2] === '--discard-next') {
        continue;
      } else {
        transformArr.pop();
      }
    } else if (arr[i] === '--discard-next') {
      i++;
    } else {
      transformArr.push(arr[i]);
    }
  }
  return transformArr;

};