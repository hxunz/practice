/**
* ## 이해
*
* 미지의 것: 캐릭터가 상대 팀 진영에 도착하기 위해서 지나가야 하는 칸의 개수의 최솟값을 return
           상대 팀 진영에 도착할 수 없을 때는 -1을 return
* 자료
*   - 캐릭터가 움직일 때는 동, 서, 남, 북 방향으로 한 칸씩 이동하며,
    - 게임 맵을 벗어난 길은 갈 수 없습니다.
    - maps는 0과 1로만 이루어져 있으며, 0은 벽이 있는 자리, 1은 벽이 없는 자리를 나타냅니다.
    - 처음에 캐릭터는 게임 맵의 좌측 상단인 (1, 1) 위치
    - 상대방 진영은 게임 맵의 우측 하단인 (n, m) 위치
* 조건
*   -
*
* ## 계획
*   - 처음 위치에서 이동할 수 있는 모든 방향을 간다.
    - 방문한 곳은 방문했다는 표시를 해준다.
    - 도착점에 도달하면 방문한 곳의 개수를 리턴한다.
*
* ## 실행
*
* ## 반성
*
*/

const solution = (maps) => {
  let visited = Array.from(Array(maps.length), () => Array(maps[0].length).fill(false));
  // console.log('visited::: ', visited);
  let queue = [];
  let distance = 0;
  let [currentX, currentY] = queue[queue.length - 1];

  while (true) {
    if (currentX === maps.length - 1 && currentY === maps[0].length - 1) {
      return distance;
    }
  }
};

test('solution', () => {
  expect(solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])).toBe(11);
  // expect(solution([
  //   [1, 0, 1, 1, 1],
  //   [1, 0, 1, 0, 1],
  //   [1, 0, 1, 1, 1],
  //   [1, 1, 1, 0, 0],
  //   [0, 0, 0, 0, 1],
  // ])).toBe(-1);
});
