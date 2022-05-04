// https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript

String.prototype.toJadenCase = function (str) {
  let words = this.split(' ');
  
  const result = words.map((word) => {
    return word[0].toUpperCase() + word.substring(1);
  });
  
  return result.join(' ');
};