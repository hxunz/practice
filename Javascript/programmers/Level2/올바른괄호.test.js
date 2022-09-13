const solution = (s) => {
  const str = s.replace(/[^()]/gi, '');
  // s의(개수와)개수가 같다면 true
  let count = 0;
  for (i = 0; i < str.length; i++) {
    if (str[i] === '(') {
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
  expect(solution("()a()")).toEqual(true);
  // expect(solution("()()")).toEqual(true);
  // expect(solution(")()(")).toEqual(false);
  // expect(solution('())())')).toEqual(false);
  // expect(solution("())()(()")).toEqual(false);
});
