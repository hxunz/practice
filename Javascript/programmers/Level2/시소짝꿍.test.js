/**
* ## 이해
*
* 미지의 것: 시소 짝꿍이 몇 쌍 존재하는지 구하여 return
* 자료
*   - 이 시소는 중심으로부터 2(m), 3(m), 4(m) 거리의 지점에 좌석이 하나씩 있습니다.
    - 탑승한 사람의 무게와 시소 축과 좌석 간의 거리의 곱이 양쪽 다 같다면 시소 짝꿍
* 조건
*   -
*
* ## 계획
*   - 중심으로 부터 떨어진 거리를 배열에 담아둔다.
    - 비어있는 해시맵을 준비해둔다.
    - 몸무게와 거리를 곱한 값이 해시맵에 있다면 넣지않고 count+1
    - 몸무게와 거리를 곱한 값이 해시맵에 없다면 넣어둔다.
    -  weights를 끝까지 반복했을 때 count 값을 리턴한다.
*
* ## 실행
*
* ## 반성
*
*/

const solution = (weights) => {
  let count = 0;
  const map = new Map();
  const percents = [1, 2, 3 / 2, 4 / 3];

  const sortWeights = weights.sort((a, b) => b - a);

  for (const weight of sortWeights) {
    for (const percent of percents) {
      if (map.has(weight * percent)) count += map.get(weight * percent);
    }
    map.set(weight, (map.get(weight) || 0) + 1);
  }

  return count;
};

test('solution', () => {
  expect(solution([100, 180, 360, 100, 270])).toEqual(4);
})