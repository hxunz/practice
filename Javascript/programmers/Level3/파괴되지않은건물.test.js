const attack = (board, skill) => {
  const [type, r1, c1, r2, c2, degree] = skill;

  for (i = r1; i <= r2; i++) {
    for (j = c1; j <= c2; j++) {
      if (type === 1) {
        board[i][j] = board[i][j] - degree
      }
      if (type === 2) {
        board[i][j] = board[i][j] + degree
      }
    }
  }
  return board
}

const solution = (board, skills) => {
  for (let i = 0; i < skills.length; i++) {
    attack(board, skills[i])
  }

  return board.reduce((sum, rows) => {
    return sum + rows.filter((col) => col > 0).length;
  }, 0);
};

test('countBuildings', () => {
  expect(solution([[10]], [[1, 0, 0, 0, 0, 5]])).toEqual(1);
  expect(solution([[7, 3]], [[1, 0, 0, 0, 1, 2]])).toEqual(2);
  expect(solution([[1, 2], [3, 4]], [[1, 0, 0, 0, 0, 2], [1, 1, 1, 1, 1, 3], [1, 1, 1, 1, 1, 2]])).toEqual(2);
  expect(solution([[5, 6, 7]], [[1, 0, 0, 0, 0, 2]])).toEqual(3);
  expect(solution([[5, 6, 7], [7, 8, 9]], [[1, 0, 0, 0, 0, 2]])).toEqual(6);
  expect(solution([[5, 5, 5, 5, 5], [5, 5, 5, 5, 5], [5, 5, 5, 5, 5], [5, 5, 5, 5, 5]], [[1, 0, 0, 3, 4, 4], [1, 2, 0, 2, 3, 2], [2, 1, 0, 3, 1, 2], [1, 0, 1, 3, 3, 1]])).toEqual(10);
})