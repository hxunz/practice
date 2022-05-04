// https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript

function findNextSquare(sq) {
  const num = Math.sqrt(sq);
  
  if (Number.isInteger(num) === false) {
    return -1;
  } 
  
  return Math.pow(num+1, 2);
}