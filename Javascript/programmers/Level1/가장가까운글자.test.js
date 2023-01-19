const solution = (s) => {
  let index = [];
  let alphabet = [];

  for (let i = 0; i < s.length; i++) {
    if (alphabet.includes(s[i])) {
      index.push(i - alphabet.lastIndexOf(s[i]))
    } else {
      index.push(-1)
    }
    alphabet.push(s[i]);
  }

  return index;
};

test('solution', () => {
  expect(solution("banana")).toEqual([-1, -1, -1, 2, 2, 2]);
});
