const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = '';
  if (typeof options.addition === 'boolean' || options.addition === null) {
    options.addition = String(options.addition);
  }
  if (!options.repeatTimes) options.repeatTimes = 1;
  if (!options.additionRepeatTimes) options.additionRepeatTimes = 1;
  for (let i = 1; i <= options.repeatTimes; i++) {
    result += str;
    if (options.addition) {
      for (let j = 1; j <= options.additionRepeatTimes; j++) {
        result += options.addition;
        if (j !== options.additionRepeatTimes) {
          result += options.additionSeparator || '|';
        }
      }
    }
    if (i !== options.repeatTimes) {
      result += options.separator || '+';
    }
  }
  return result;
}

module.exports = {
  repeater
};
