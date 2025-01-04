const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let result = [];
  for (let i = 0; i < n.toString().length; i++) {
    let num = n.toString().split('').slice();
    num.splice(i, 1)
    result.push(num.join(''));
  }
  return Math.max(...result)
}

module.exports = {
  deleteDigit
};
