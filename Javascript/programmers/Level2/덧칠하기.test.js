/**
* ## 이해
*
* 미지의 것: 페인트를 칠해야하는 최소 횟수를 구하라
* 자료
*   - 다시 페인트를 칠하기로 정한 구역들의 번호가 담긴 정수 배열 section
    - 페인트가 칠해진 길이가 n미터
    - 벽에 페인트를 칠하는 롤러의 길이는 m미터
    - 롤러가 벽에서 벗어나면 안 됩니다.
    - 구역의 일부분만 포함되도록 칠하면 안 됩니다.
* 조건
*   - 1 ≤ m ≤ n ≤ 100,000
    - 1 ≤ section의 길이 ≤ n
*
* ## 계획
*   - n만큼의 벽을 만든다.
    - 칠해져 있는 곳은 1이라고 한다.
    - 칠해져 있지 않은 곳은 0이라고 한다.
    - 벽을 순회하면서 칠해져 있지 않은 곳을 m 만큼 칠하고 count 값을 증가시킨다.
    - n의 요소가 전부 1이면 순회를 멈춘다.
    - count 값을 리턴한다.
*
* ## 실행
*
* ## 반성
*
*/

const solution = (n, m, section) => {
  const wall = Array.from({ length: n }, (_, i) => 1);
  for (let i = 0; i < section.length; i++) {
    wall[section[i] - 1] = 0
  }
  let count = 0;

  for (let i = 0; i < wall.length; i++) {
    if (wall[i] === 0) {
      console.log('i::: ', i);
      wall[i] = 1
      i = i + m - 1
      count++
    }
  }

  return count
};

test('solution', () => {
  expect(solution(8, 4, [2, 3, 6])).toEqual(2);
})