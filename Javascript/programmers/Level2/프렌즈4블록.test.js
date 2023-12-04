const solution = (m, n, board) => {
  // 먼저 배열의 문자열을 2차원 배열로 나눕니다.
  // 배열에서 지워질 블록의 인덱스를 구해 arr안에 넣습니다.
  // 배열에서 지워질 블록을 0으로 바꿉니다.
  // 깨진 블록을 없애고 위에서 블록을 당겨옵니다. (이 부분의 로직이 어려운데 먼저 위에서 가져올 블록이 있는지 검사합니다.)

  board = board.map((it) => it.split(''));

  let arr = [];
  for (let i = 0; i < m - 1; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (board[i][j] &&
        board[i][j] === board[i + 1][j] &&
        board[i][j] === board[i][j + 1] &&
        board[i][j] === board[i + 1][j + 1]) {
        arr.push([i, j])
      }
    }
  };
  // console.log('arr::: ', arr);
  // console.log('[].concat(...board)::: ', [].concat(...board));
  // console.log('::: ', [].concat(...board).filter((v) => !v).length);
  if (arr.length === 0) {
    return [].concat(...board).filter((v) => !v).length
  };

  for (let i = 0; i < arr.length; i++) {
    const col = arr[i][0];
    const row = arr[i][1];
    board[col][row] = 0;
    board[col + 1][row] = 0;
    board[col][row + 1] = 0;
    board[col + 1][row + 1] = 0;
  }

  for (let i = m - 1; i > 0; i--) {
    if (!board[i].some((it) => !it)) continue;

    for (let j = 0; j < n; j++) {
      for (let k = i - 1; k >= 0; k--) {
        if (board[k][j]) {
          board[i][j] = board[k][j];
          board[k][j] = 0;
          break;
        }
      }
    }
  }
  console.log('board::: ', board);
};

test('', () => {
  expect(solution(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"])).toEqual(14);
});
