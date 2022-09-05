const fibonacci = (n, memo = {}) => {
  // if (n === 0 || n === 1) {
  //   return n;
  // }
  // if (!memo[n]) {
  //   memo[n] = fibonacci(n - 2, memo) + fibonacci(n - 1, memo);
  // }

  // return memo[n] % 1234567;
  let numbers = [0, 1];
  for (i = 2; i <= n; i++) {
    numbers.push((numbers[i - 1] % 1234567) + (numbers[i - 2] % 1234567) % 1234567);
  }

  return numbers[n] % 1234567;
};

test('fibonacci', () => {
  expect(fibonacci(3)).toEqual(2);
  expect(fibonacci(5)).toEqual(5);
});
