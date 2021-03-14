const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depthArr = 0;
    
    if (Array.isArray(arr) == true) {
      
          for (let j = 0; j < arr.length; j++) {
            depthArr = Math.max(depthArr, this.calculateDepth(arr[j]));
          }
      
      depthArr++;
    }
    
    return depthArr;
  }

};

