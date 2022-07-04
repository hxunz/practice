//1.이해
// 주어진 두 배열의 내적을 구하라

// 2. 계획
// 반복문을 돌면서 a와 b 배열 내 요소들을 곱해준다 
// 그 값들을 더한다.

function solution(a, b) {
  return a.reduce((prev, curr, i) => prev + curr * b[i], 0);
};

test('내적', () => {
  expect(solution([1, 2], [3, 4])).toBe(11);
  expect(solution([1,2,3,4]	, [-3,-1,0,2])).toBe(3);
})