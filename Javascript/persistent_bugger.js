// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript

function persistence(num) {
  let i = 0;
  
  while(num.toString().length !== 1) {
   num = num.toString().split('').reduce((acc,cur) => acc * cur);
   i++;
  }
  
  return i;
}