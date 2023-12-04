/**
* ## 이해
*
* 미지의 것: 튜브의 프로그램을 구현하라.
* 자료
*   - 진법 n, 미리 구할 숫자의 갯수 t, 게임에 참가하는 인원 m, 튜브의 순서 p 가 주어진다.
* 조건
*   -
*
* ## 계획
*   -
*
* ## 실행
*
* ## 반성
*
*/

const solution = (n, t, m, p) => {
  let numbers = [];
  let result = [];

  for (let i = 0; i < t * m; i++) {
    numbers.push(i)
  }
  console.log('numbers::: ', numbers);

  for (let i = p - 1; i < numbers.length; i += m) {
    result.push(i)
  }
  console.log('result::: ', result);
};

test('solution', () => {
  // expect(solution(10, 4, 2, 1)).toEqual('0246');
  expect(solution(10, 8, 2, 1)).toEqual('02468111');
  // expect(solution(2, 4, 2, 1)).toEqual('0111')
})