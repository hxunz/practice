function solution(n) {
  let submultiple = [];
  for (i = 1; i <= n; i++) {
    if (n % i === 0) {
      submultiple.push(i);
    }
  }
  return submultiple.reduce((acc, cur) => acc + cur, 0);
}

test('count', () => {
  expect(solution(12)).toEqual(28);
});
