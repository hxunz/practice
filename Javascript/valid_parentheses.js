// https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript

function validParentheses(parens) {
  const paren = parens.split('');
  console.log(paren);
  let map = {
    '(' : ')',
    '[' : ']',
    '{' : '}'
  }
  let stack = [];
  
  for (i=0; i < paren.length; i++) {
    if (paren[i] === '(' || paren[i] === '[' || paren[i] === '{') {
      stack.push(paren[i]);
    }
  }

}