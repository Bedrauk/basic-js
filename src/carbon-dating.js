const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // const MODERN_ACTIVITY = 15;
  // const HALF_LIFE_PERIOD = 5730;
  const period = Number(sampleActivity);
  if (
    !isNaN(period) &&
    period > 0 &&
    period < 15 &&
    typeof sampleActivity === "string"
  ) {
    return Math.ceil(-HALF_LIFE_PERIOD * Math.log2(sampleActivity / MODERN_ACTIVITY));
  } else {
    return false
  }
}


module.exports = {
  dateSample
};
