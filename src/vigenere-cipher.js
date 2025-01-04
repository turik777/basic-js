const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
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
  constructor(direct = true) {
    this.direct = direct;
  }
  encrypt(text, key) {
    if (!text || !key) throw new Error('Incorrect arguments!');
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let count = 0;
    let encrypted = text.toUpperCase().split('').map((char, index) => {
      if (alphabet.includes(char)) {
        let textIndex = alphabet.indexOf(char);
        let keyIndex = alphabet.indexOf(key.toUpperCase().charAt((index - count) % key.length));
        let encryptedIndex = (textIndex + keyIndex) % alphabet.length;
        return alphabet[encryptedIndex];
      } else {
        count++;
        return char;
      }
    });
    return this.direct ? encrypted.join('') : encrypted.reverse().join('');
  }
  decrypt(text, key) {
    if (!text || !key) throw new Error('Incorrect arguments!');
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let count = 0;
    let decrypted = text.toUpperCase().split('').map((char, index) => {
      if (alphabet.includes(char)) {
        let textIndex = alphabet.indexOf(char);
        let keyIndex = alphabet.indexOf(key.toUpperCase().charAt((index - count) % key.length));
        let decryptedIndex = (textIndex - keyIndex + alphabet.length) % alphabet.length;
        return alphabet[decryptedIndex];
      } else {
        count++;
        return char;
      }
    });
    return this.direct ? decrypted.join('') : decrypted.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
