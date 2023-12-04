/**
* ## 이해
*
* 미지의 것: 주어진 배열 numbers에서 두 정수의 합이 목표값 goal과 동일한 수를 만들 수 있는 두 정수를 찾아라
* 자료
*   - 정답이 될 두 수는 유일한다.
    - 해당 쌍의 index값을 오름 차순으로 정렬하여 출력하라
* 조건
*   -
*
* ## 계획
*   - numbers에서 두 수를 더한다.
    - 모든 조합을 찾는다.
    - 더한 값이 goal과 일치하다면 해당 값의 인덱스를 리턴한다.
*
* ## 실행
*
* ## 반성
*
*/

const solution = (numbers, goal) => {

};

test('solution', () => {
  expect(solution([4, 3, 5, 1], 4)).toEqual([1, 3])
  expect(solution([3, 2, 4], 6)).toEqual([1, 2])
});
