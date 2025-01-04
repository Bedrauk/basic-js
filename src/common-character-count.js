const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const commonChars = new Set(s1.concat(s2))
  let commonCount = 0;

  for (const char of commonChars) {
    const countS1 = s1.length - s1.replaceAll(char, "").length;
    const countS2 = s2.length - s2.replaceAll(char, "").length;
    commonCount += Math.min(countS1, countS2);
  }

  return commonCount;
}

module.exports = {
  getCommonCharacterCount
};
