const solution = (n, count = 0) => {
  if (n === 0) {
    return count
  }
  if (n % 2 === 0) {
    return solution(n / 2, count)
  }
  if (n % 2 !== 0) {
    return solution(n - 1, count += 1)
  }
};

test('batteryCount', () => {
  expect(solution(5)).toEqual(2);
  expect(solution(6)).toEqual(2);
  expect(solution(5000)).toEqual(5);
});
