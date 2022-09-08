function solution(n, m) {
  let gcd = 1;

  for (let i = 2; i <= Math.min(n, m); i++) {
    if (n % i === 0 && m % i === 0) {
      gcd = i;
    }
  }

  let lcm = 1;

  while (true) {
    if ((lcm % n == 0) && (lcm % m == 0)) {
      break;
    }
    lcm++;
  }

  return [gcd, lcm];
}

test('최대공약수와 최소공배수 구하기', () => {
  expect(solution(3, 12)).toEqual([3, 12]);
});
