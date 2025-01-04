const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';

  try {
    date.getTimezoneOffset();
  } catch (error) {
    throw new Error('Invalid date!');
  };

  let season = '';
  switch (date.toString().split(' ')[1]) {
    case 'Dec':
    case 'Jan':
    case 'Feb':
      return season = 'winter';

    case 'Mar':
    case 'Apr':
    case 'May':
      return season = 'spring';

    case 'Jun':
    case 'Jul':
    case 'Aug':
      return season = 'summer';

    case 'Sep':
    case 'Oct':
    case 'Nov':
      return season = 'autumn';
  }

  return season;
}

module.exports = {
  getSeason
};
