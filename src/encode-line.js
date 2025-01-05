const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const charArray = str.split('');
  const encodedArray = charArray.reduce((acc, char, i, arr) => {
    if (char === arr[i - 1]) {
      acc[acc.length - 1][1]++;
    } else {
      acc.push([char, 1]);
    }
    return acc;
  }, []);

  return encodedArray.map(([char, count]) => (count > 1 ? count : '') + char).join('');
}

module.exports = {
  encodeLine
};
