// https://www.codewars.com/kata/54b724efac3d5402db00065e/train/javascript

decodeMorse = function (morseCode) {
  const code = morseCode.split("   ");
  const alphabet = code.map(word => word.split(' ').map(w => MORSE_CODE[w]).join(''));
  
  return alphabet.join(' ').trim();
}