// 1. 이해
// 자연수 n이 주어진다
// 3진법으로 바꾼다
// 숫자를 뒤집는다
// 다시 10진법으로 바꾼다.

// 2. 계획
// 자연수 n을 3진법으로 바꾼다
// 숫자를 뒤집는다
// 다시 10진법으로 바꾼다.

function solution(n) {
  const ternary = n.toString(3);
  const reverse = ternary.split('').reverse();
  const decimal = parseInt(reverse.join(''), 3).toString(10);
  return parseInt(decimal);
}

test('3진법 뒤집기', () => {
  const n = 45;
  expect(solution(n)).toBe(7);
});