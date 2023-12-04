
const solution = (mapSize, location, line) => {
  let [x, y, direction] = location;
  let count = 0;

  while (count < 3) {
    if (direction === 0) {
      direction = 3;
      if (line[x][y - 1] !== 1 && line[x][y - 1] !== undefined && line[x][y - 1] !== 2) {
        y = y - 1;
        count++;
        line[x][y - 1] = 2;
      }
    }

    if (direction === 1) {
      direction = 0;
      if (line[x - 1][y] !== 1 && line[x - 1][y] !== undefined && line[x - 1][y] !== 2) {
        x = x - 1;
        count++;
        line[x - 1][y] = 2;
      }
    }

    if (direction === 2) {
      direction = 1;
      if (line[x][y + 1] !== 1 && line[x][y + 1] !== undefined && line[x][y + 1] !== 2) {
        y = y + 1;
        count++;
        line[x][y + 1] = 2;
      }
    }

    if (direction === 3) {
      direction = 2;
      if (line[x + 1][y] !== 1 && line[x + 1][y] !== undefined && line[x + 1][y] !== 2) {
        x = x + 1;
        count++;
        line[x + 1][y] = 2;
      }
    }
  }

  return count
};

test('count', () => {
  expect(solution([4, 4], [1, 1, 0], [[1, 1, 1, 1], [1, 0, 0, 1], [1, 1, 0, 1], [1, 1, 1, 1]])).toEqual(3);
});

// 1.바라보고있는 방향에서 90도 왼쪽을 확인한다.
// 1-1 방문 할 수 있는 곳이라면 방문한다. 
//     네 방향 모두 가본 곳이거나 바다로 되어있는 경우 바라보는 방향을 유지한 채로 한칸 뒤로 이동 후 1번으로 간다.
//     한칸 뒤로 이동할 때 바다라면 종료
// 1-2 방문할 수 없으면 1번으로 간다.