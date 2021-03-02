const CustomError = require("../extensions/custom-error");

const chainMaker = {
  startChain: [],
  getLength() {
    return this.startChain.length;
  },
  addLink(value) {
    this.startChain.push('( ' + String(value) + ' )');
    return this;

  },
  removeLink(position) {
    if (!Number.isInteger(position) || position < 1 || position > this.getLength()) {
      this.startChain = [];
      throw new RangeError('Error');
    } else {
      this.startChain.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.startChain.reverse();
    return this;
  },
  finishChain() {
    let result = this.startChain.join('~~');
    this.startChain = [];
    return result;
  }
};

module.exports = chainMaker;
