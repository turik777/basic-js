const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let statsDNS = {};
  let DNS = [];

  domains
    .map(domain => domain.split('.').reverse())
    .map(parts => {
      let arr = [];
      let str = '';
      parts.map(part => {
        str += `.${part}`;
        arr.push(str);
      });
      DNS.push(arr);
    });

  DNS.flat().map(part => statsDNS[part] = statsDNS[part] ? statsDNS[part] + 1 : 1);
  return statsDNS;
}

module.exports = {
  getDNSStats
};
