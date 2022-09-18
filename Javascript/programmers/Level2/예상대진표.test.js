const solution = (n, a, b) => {
  let count = 0;
  while (a !== b) {
    a = Math.floor((a + 1) / 2);
    b = Math.floor((b + 1) / 2);
    count++;
  }
  return count;
};

test('', () => {
  expect(solution(8, 4, 7)).toEqual(3);
});
