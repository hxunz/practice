// https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript

var isSquare = function(n){
  const sqrt = Math.sqrt(n);
  const result = Number.isInteger(sqrt);
  
  return result;
}