const open = ['(', '{', '['];
const close = [')', '}', ']'];

const solution = (str) => {
  const string = [...str];

  let stackStr = [];

  for (i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
      stackStr.push(str[i]);
    } else if (str[i] === ')' || str[i] === '}' || str[i] === ']') {
      stackStr.pop();
      if (stackStr.pop() === undefined) {
        return `${str[i]} doesn't have opening brace`
      }
    }
  }
  
  if (stackStr.length === 0) {
    return true
  } else {
    return `${stackStr[0]} doesn't have closing brace`
  }
}



test('solution', () => {
  // expect(solution('(let x = 1)')).toEqual(true);
  // expect(solution('(let x = {y:[1,2,3]})')).toEqual(true);
  // expect(solution('(let x = {y:[1,2,3]}')).toEqual(`( doesn't have closing brace`);
  expect(solution('(let x = y:[1,2,3]})')).toEqual(`} doesn't have opening brace`);
});
