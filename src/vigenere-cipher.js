const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * Our machine will have 2 modifications: direct and reverse (the type of machine is determined at the moment of creation).
 * The direct machine simply encodes and decodes the string that was transmitted to it,
 * and the reverse machine returns an inverted string after encoding and decoding.
 * Your task is to implement the class VigenereCipheringMachine. 
 * constructor of this class accepts true (or nothing) to create direct machine and false to create reverse machine. 
 * Each instance of VigenereCipheringMachine must have 2 methods: encrypt and decrypt.
 * 
 * @constructor {Boolean} type - true for direct machine, false for reverse machine
 * 
 * @method encrypt
 * @param {String} phrase
 * @param {String} key
 * @returns {String} encrypted phrase
 * 
 * @method decrypt
 * @param {String} phrase
 * @param {String} key
 * @returns {String} decrypted phrase
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
  }

  process(phrase, key, encrypt = true) {
    if (!phrase || !key) throw new Error('Incorrect arguments!');
    const upperPhrase = phrase.toUpperCase();
    const upperKey = key.toUpperCase();
    let keyIndex = 0;

    const shiftChar = (charCode, keyCharCode, encrypt) => {
      const shift = encrypt
        ? (charCode - 65 + (keyCharCode - 65)) % 26
        : (charCode - 65 - (keyCharCode - 65) + 26) % 26;
      return String.fromCharCode(shift + 65);
    };
    const result = upperPhrase.split('').map(char => {
      const charCode = char.charCodeAt(0);
      if (charCode >= 65 && charCode <= 90) {
        const processedChar = shiftChar(charCode, upperKey.charCodeAt(keyIndex % upperKey.length), encrypt);
        keyIndex++;
        return processedChar;
      } else {
        return char;
      }
    });
    return this.type ? result.join('') : result.reverse().join('');
  }

  encrypt(phrase, key) {
    return this.process(phrase, key, true);
  }

  decrypt(phrase, key) {
    return this.process(phrase, key, false);
  }
}

module.exports = {
  VigenereCipheringMachine
};
