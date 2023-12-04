/**
* ## 이해
*
* 미지의 것: 열쇠로 자물쇠를 열수 있으면 true를, 열 수 없으면 false를 return
* 자료
*   - 잠겨있는 자물쇠는 격자 한 칸의 크기가 1 x 1인 N x N 크기의 정사각 격자 형태
    - 특이한 모양의 열쇠는 M x M 크기인 정사각 격자 형태
    - 열쇠는 회전과 이동이 가능하며
      열쇠의 돌기 부분을 자물쇠의 홈 부분에 딱 맞게 채우면 자물쇠가 열리게 되는 구조
    - 자물쇠 영역 내에서는 열쇠의 돌기 부분과 자물쇠의 홈 부분이 정확히 일치해야 하며
      열쇠의 돌기와 자물쇠의 돌기가 만나서는 안됩니다.
    - 자물쇠의 모든 홈을 채워 비어있는 곳이 없어야 자물쇠를 열 수 있습니다.
    - 0은 홈 부분, 1은 돌기 부분을 나타냅니다.
* 조건
*   -
*
* ## 계획
*   - 1. 키의 돌기 부분을 자물쇠의 홈에 하나씩 넣어본다.
    - 2. 넣었을 때 자물쇠 홈이 전부 다 채워진다면 true를 리턴한다.
    - 열쇠를 시계 방향으로 90도 회전을 한다. -> 총 3번 회전을 해 본다.
    - 한번 회전을 할 때 마다 1,2번을 반복한다.
    - 위 과정을 다 거쳤는데도 true를 리턴하지 못한다면 false를 리턴한다.
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
};

const move = (route, command, [maxLeft, maxRight, maxUp, maxDown]) => {
  const next = movement[command](route);
  if (maxLeft <= next[0] && maxRight >= next[0] && maxUp >= next[1] && maxDown <= next[1]) {
    return next;
  }

  return route;
};

const solution = (key, lock) => {
  //키의 돌기 부분의 좌표를 구한다.
  let keysLocation = [];
  for (let y = 0; y < key.length; y++) {
    for (let x = 0; x < key[0].length; x++) {
      if (key[y][x] === 1) {
        keysLocation.push([x, y])
      }
    }
  }
  //자물쇠의 홈 부분의 좌표를 구한다.
  const lockLocation = [];
  for (let y = 0; y < lock.length; y++) {
    for (let x = 0; x < lock[0].length; x++) {
      if (lock[y][x] === 0) {
        lockLocation.push([x, y])
      }
    }
  }

  for (let i = 0; i < keysLocation.length; i++) {
    for (let j = 0; j < lockLocation.length; j++) {
      if (JSON.stringify(keysLocation[i]) === JSON.stringify(lockLocation[j])) {
        return true
      }
    }
  }
  //키의 돌기 부분의 좌표를 위아래좌우로 움직인다.
  //움직였을 때 자물쇠의 홈 좌표와 키의 돌기 부분의 좌표가 같다면 자물쇠를 푼 것이다.

  while (true) {
    const route = [0, 0];
    const maxLeft = lock[0].length - 1;
    const maxRight = key[0].length - 1;
    const maxUp = key.length - 1;
    const maxDown = lock.length - 1;

    const next = move(route, 'right', [maxLeft, maxRight, maxUp, maxDown]);
    if (JSON.stringify(route) === JSON.stringify(next)) {
      console.log('route::: ', route);
      console.log('next::: ', next);
      return true;
    }
  }
};

test('solution', () => {
  // expect(solution([
  //   [0, 0],
  //   [1, 0],
  // ], [
  //   [1, 1],
  //   [0, 1],
  // ])).toBe(true);
  expect(solution([
    [1, 0],
    [0, 0],
  ], [
    [1, 1],
    [0, 1],
  ])).toBe(true);
  // expect(solution([
  //   [0, 0, 0],
  //   [1, 0, 0],
  //   [0, 1, 1]
  // ], [
  //   [1, 1, 1],
  //   [1, 1, 0],
  //   [1, 0, 1],
  // ])).toBe(true);
  // expect(solution([
  //   [0, 0, 0],
  //   [1, 0, 0],
  //   [0, 1, 1]
  // ], [
  //   [1, 1, 1],
  //   [1, 1, 1],
  //   [1, 1, 1],
  // ])).toBe(false);
});
