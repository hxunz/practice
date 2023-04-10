/**
* ## 이해
*
* 미지의 것: 연속된 자연수들로 n을 표현하는 방법의 수를 return
* 자료
*   -
* 조건
*   -
*
* ## 계획
*   - 주어진 숫자의 약수 중에 홀수의 개수를 찾아서 리턴한다.
*
* ## 실행
*
* ## 반성
*
*/
const solution = (n) => {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0 && i % 2 === 1) {
      count += 1;
    }
  }

  return count;
};

test('solution', () => {
  expect(solution(15)).toBe(4);
});
