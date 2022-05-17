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
  const result = parseInt(n.toString(3).split('').reverse().join(''), 3);
  return result;
}

test('3진법 뒤집기', () => {
  const n = 45;
  expect(solution(n)).toBe(7);
});