const solution = (N, move) => {
  //   A의 처음 시작 지점을 start = [1, 1]이라고 정한다.
  let start = [1, 1];

  // move 배열을 순회하면서 
  // 문자열이 'L'인 경우
  // start[1]이 1일때 그대로 start[1]
  // start[1] - 1을 한다.
  //   문자열이 'R'인 경우
  // start[1]이 N일때 그대로 start[1]
  // start[1] + 1을 한다.
  //   문자열이 'U'인 경우
  // start[0]이 1일때 그대로 start[0]
  // start[0] - 1을 한다.
  //   문자열이 'D'인 경우
  // start[0]이 N일때 그대로 start[0]
  // start[0] + 1을 한다.
  for (i = 0; i < move.length; i++) {
    if (move[i] === 'L') {
      if (start[1] === 1) {
        start[1] = start[1]
      } else {
        start[1] = start[1] - 1;
      }
    }
    if (move[i] === 'R') {
      if (start[1] === N) {
        start[1] = start[1]
      } else {
        start[1] = start[1] + 1;
      }
    }
    if (move[i] === 'U') {
      if (start[0] === 1) {
        start[0] = start[0]
      } else {
        start[0] = start[0] - 1;
      }
    }
    if (move[i] === 'D') {
      if (start[0] === N) {
        start[0] = start[0]
      } else {
        start[0] = start[0] + 1;
      }
    }
  }
  return start
};

test('coordinate', () => {
  expect(solution(5, ['R', 'R', 'R', 'U', 'D', 'D'])).toEqual([3, 4]);
});
