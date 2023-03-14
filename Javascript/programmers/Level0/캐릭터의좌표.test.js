/**
* ## 이해
[0,0]에서 시작할 때 키 입력이 모두 끝난 뒤에 캐릭터의 좌표 [x, y]를 return
*
* 미지의 것:
* 자료
*   - up, down, left, right 방향키가 있으며 각 키를 누르면 위, 아래, 왼쪽, 오른쪽으로 한 칸씩 이동
    - 방향키의 배열 keyinput
    - 맵의 크기 board
* 조건
*   - board의 가로 크기가 9라면 캐릭터는 왼쪽으로 최대 [-4, 0]까지 오른쪽으로 최대 [4, 0]까지 이동 가능
    - board의 가로 크기와 세로 크기는 홀수입니다.
*
* ## 계획
*   - 처음 시작 좌표를 start= [0,0]으로 정한다.
    - route 최대 길이를 정한다.
      - 가로 크기 = (board[0]-1)/2
      - 세로 크기 = (board[1]-1)/2
    - keyinput을 가지고 이동 경로를 계산한다.
      - keyinput을 순회한다.
      - left면 start[0]-1 한다.
      - right면 start[0]+1 한다.
      - up이면 start[1]+1 한다.
      - downd이면 start[1]-1 한다.
      - route 최대 길이를 넘지 않도록 한다.
*
* ## 실행
*
* ## 반성
*
*/

const movement = {
  left: ([x, y]) => [x - 1, y],
  right: ([x, y]) => [x + 1, y],
  up: ([x, y]) => [x, y + 1],
  down: ([x, y]) => [x, y - 1],
}

const move = (route, command, [maxLeft, maxRight, maxUp, maxDown]) => {
  const next = movement[command](route);
  if (maxLeft <= next[0] && maxRight >= next[0] && maxUp >= next[1] && maxDown <= next[1]) {
    return next;
  }

  return route;
}

const solution = (keyinput, [width, height]) => {
  const [maxLeft, maxRight, maxUp, maxDown] = [-((width - 1) / 2), (width - 1) / 2, (height - 1) / 2, -((height - 1) / 2)];

  // [0, 0] left -> [-1, 0]
  // [-1, 0] down [-1, -1]
  return keyinput.reduce((position, command) => {
    return move(position, command, [maxLeft, maxRight, maxUp, maxDown])
  }, [0, 0])
};

test('move', () => {
  expect(
    move([-4, 0], 'left', [-4, 4, 4, -4])
  ).toEqual([-4, 0]);
})

test('solution', () => {
  expect(solution(["left", "right", "up", "right", "right"], [11, 11])).toEqual([2, 1]);
  expect(solution(["down", "down", "down", "down", "down"], [7, 9])).toEqual([0, -4]);
});
