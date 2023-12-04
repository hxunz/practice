/**
* ## 이해
*
* 미지의 것: 문제의 조건을 만족하도록 학생을 교환하는 횟수의 최소값을 구하라
* 자료
*   - 두 반의 학생 수는 N명으로 동일하다.
    - 두 반에서 출석 번호가 같은 학생끼리 교환해서 키 번호를 맞춰야한다.
    - 답은 항상 존재한다.
* 조건
*   -
*
* ## 계획
*   - 주어진 배열을 서로 비교한다.
    - 같은 인덱스의 숫자를 바꿨을 때 오름차순이 된다면 바꾼다. 이때, count+1을 해준다.
    - 그렇지 않으면 바꾸지 않는다.
*
* ## 실행
*
* ## 반성
*
*/

const solution = (heights1, heights2) => {
  let count = 0;
  for (let i = 0; i < heights1.length; i++) {
    if (heights1[i] < heights1[i + 1] && heights2[i] < heights2[i + 1]) {
      continue;
    }
    if (heights1[i] < heights2[i + 1] && heights2[i] < heights1[i + 1] && heights1[i] !== heights2[i]) {
      console.log('heights[i]::: ', heights1[i]);
      count += 1
    }
  }
  console.log('count::: ', count);
  return count;
};

test('solution', () => {
  // expect(solution([150, 170, 180, 180], [150, 160, 170, 190])).toEqual(1)
  // expect(solution([130, 140], [130, 140])).toEqual(0)
  // expect(solution([150, 160, 180], [150, 170, 190])).toEqual(0)
  // expect(solution([140, 150, 190], [130, 170, 160])).toEqual(1)
  expect(solution([140, 160, 150], [130, 160, 170])).toEqual(1);
});
