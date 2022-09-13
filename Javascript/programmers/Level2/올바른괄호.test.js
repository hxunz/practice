const solution = (s) => {
  // s의(개수와)개수가 같다면 true
  let count = 0;
  for (i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      count++
    } else {
      count--
    }
    if (count < 0) {
      return false
    }
  }

  return count === 0 ? true : false;
}

test('trueOrFalse', () => {
  expect(solution("()()")).toEqual(true);
  expect(solution(")()(")).toEqual(false);
  expect(solution('())())')).toEqual(false);
  expect(solution("())()(()")).toEqual(false);
});
