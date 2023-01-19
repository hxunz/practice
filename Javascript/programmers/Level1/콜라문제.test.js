const solution = (a, b, n, number = 0) => {
  let count = Math.floor(n / a);

  if (n < a) {
    return number
  }

  return solution(a, b, n - (count * a) + count * b, number + count * b)
};

test('solution', () => {
  expect(solution(2, 1, 20)).toEqual(19);
  expect(solution(3, 1, 20)).toEqual(9);
  expect(solution(3, 2, 10)).toEqual(16);
});
