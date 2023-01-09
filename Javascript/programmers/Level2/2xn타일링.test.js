const solution = (n) => {
  const arr = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    arr[i] = (arr[i - 2] + arr[i - 1]) % 1000000007;
  }
  return arr[n];
};

test('solution', () => {
  expect(solution(4)).toEqual(5);
});
