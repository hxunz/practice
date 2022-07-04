// 1. 이해
// 정수들의 배열 absolutes가 주어진다
// 이 정수들의 음양을 판별할 불리언 배열 signs가 주어진다.
// 음양을 올바르게 판별하고 그 숫자들을 더한다.

// 2. 계획
// absolutes와 signs를 반복으로 돈다
// 배열 내 각 요소를 비교한다.
// signs가 true면 양수
// signs가 false면 음수
// 이렇게 판별한 값들을 더해준다.

function solution(absolutes, signs) {
  return absolutes.reduce(
    (prev, curr, index) => prev + curr * (signs[index] === true ? 1 : -1),
    0
  );
}

test('음양더하기', () => {
  const absolutes = [4, 7, 12];
  const signs = [true, false, true];
  expect(solution(absolutes, signs)).toBe(9);
});