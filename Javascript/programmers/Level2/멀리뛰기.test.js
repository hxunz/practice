const solution = (n) => {
  const arr = Array.from({ length: n + 1 }, (v, i) => 0);

  arr[1] = 1;
  arr[2] = 2;

  for (i = 3; i < arr.length; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2]) % 1234567
  };

  return arr[n];
};

test('countWays', () => {
  expect(solution(4)).toEqual(5);
  expect(solution(3)).toEqual(3);
});
