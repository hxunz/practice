const solution = (s) => {
  const odd = s.length % 2 === 1;
  const middleWord = Math.floor(s.length / 2);

  return odd ? s[middleWord] : `${s[middleWord - 1]}${s[middleWord]}`;
};

test('findMiddleWord', () => {
  expect(solution('abc')).toBe('b');
  expect(solution('abcd')).toBe('bc');
});
