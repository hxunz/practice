const solution = (s) => {
  const strArr = s.split('');
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (compare(strArr)) {
      result += 1;
    }
    strArr.push(strArr.shift());
  }
  return result;
}

const compare = (strArr) => {
  const bracket = { ')': '(', '}': '{', ']': '[' };
  const stack = [];
  for (let i = 0; i < strArr.length; i++) {
    const str = strArr[i]
    if (bracket[str] === undefined) {
      stack.push(str)
    } else {
      if (stack[stack.length - 1] !== bracket[str]) {
        return false
      }
      stack.pop()
    }
  }
  if (stack.length) {
    return false
  }
  return true
}


test('', () => {
  expect(solution(')')).toEqual(0);
  expect(solution('}}}')).toEqual(0);

  expect(solution('[)(]')).toEqual(0);
  expect(solution('()')).toEqual(1);
  expect(solution('(()')).toEqual(0);
  expect(solution(')(')).toEqual(1);
  expect(solution('([)')).toEqual(0);
  expect(solution('([])')).toEqual(1);
  expect(solution('[]')).toEqual(1);
  expect(solution("{}[]")).toEqual(2);
  expect(solution("[](){}")).toEqual(3);
});
