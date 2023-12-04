/**
* ## 이해
*
* 미지의 것: 논문을 게재한 연구자에 대한 인용 영향력 값을 구하라
* 자료
*   - references[i]는 i번째 논문에 대한 인용 받은 횟수
    - 인용 영향력 계산 방법
      - 과학자는 n개의 논문 중 k개의 논무이 각각 최소한 k개의 인용 횟수를 가지고 있어야한다.
      - 다른 n-k개의 논문은 각각 k개의 인용 횟수를 넘지 말아야한다.
      - 이를 만족하는 k 값의 최대값을 인용 영향력으로 판정한다.
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

const solution = (references) => {

};

test('solution', () => {
  expect(solution([3, 0, 4, 2, 8])).toEqual(3);
  expect(solution([3, 0, 6, 1, 5])).toEqual(3);
  expect(solution([1, 3, 1])).toEqual(1);
});