const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let sorted = arr.slice().sort((a, b) => a - b).filter(value => value > -1);
  arr.map((value, index) => value === -1 ? sorted.splice(index, 0, -1) : null)
  return sorted;
}

module.exports = {
  sortByHeight
};
