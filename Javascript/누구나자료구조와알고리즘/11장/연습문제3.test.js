const triangularNumbers = (N) => {
  return N === 1 ? 1 : N + triangularNumbers(N - 1);
}

test('triangularNumbers', () => {
  expect(triangularNumbers(7)).toEqual(28);
});
