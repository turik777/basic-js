const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let result = [...arr];
  let commands = ['--discard-next', '--discard-prev', '--double-next', '--double-prev']
  for (let i = 0; i < result.length; i++) {
    if (result[i] === '--discard-next') {
      result.splice(i + 1, 1);
    } else if (result[i] === '--discard-prev') {
      i - 1 > 0 ? result.splice(i - 1, 1) : null;
    } else if (result[i] === '--double-next') {
      i + 1 < result.length ? result.splice(i + 1, 0, result[i + 1]) : null;
    } else if (result[i] === '--double-prev') {
      i - 1 > 0 ? result.splice(i, 0, result[i - 1]) : null;
      i++;
    }
  }
  return result.filter(item => !commands.includes(item));
}

module.exports = {
  transform
};
