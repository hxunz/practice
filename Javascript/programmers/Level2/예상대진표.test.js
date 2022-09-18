const solution = (n, a, b) => {
  let count = 0;
  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    count++;
  }
  return count;
};

test('', () => {
  expect(solution(8, 4, 7)).toEqual(3);
});
