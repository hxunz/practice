// https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript

function validParentheses(parens) {
  const paren = parens.split('');
  let count = 0;
  
  if (paren[0] === ')' || paren[paren.length-1] === '(' || paren.length%2 === 1) {
    return false;
  }
  
  for (i=0; i < paren.length; i++) {
    if (paren[i] === '(') {
      count += 1;
    } else {
      count -= 1;
    } 
    if (count < 0) {
      return false;
    }
  }
  return count === 0;
}
