//  https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript

var countBits = function(n) {
  let sum = 0;
  n.toString(2).split('').map(str => {
    sum += Number(str);
  });
  
  return sum;
};