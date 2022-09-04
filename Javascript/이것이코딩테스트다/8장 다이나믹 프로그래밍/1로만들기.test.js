const solution = (X, count = 0) => {
  // count 값을 리턴한다.
  if (X === 1) {
    return count
  }

  // X에서 1을 빼고 count + 1을 한다.
  if ((X - 1) % 5 === 0) {
    return solution(X - 1, count + 1)
  }

  // X가 5로 나누어 떨어지면 5로 나누고 count + 1을 한다.
  if (X % 5 === 0) {
    return solution(X / 5, count + 1)
  }

  //     X가 3으로 나누어 떨어지면 3으로 나누고 count + 1을 한다.
  if (X % 3 === 0) {
    return solution(X / 3, count + 1)
  }

  //       X가 2로 나누어 떨어지면 2로 나누고 count + 1을 한다.
  if (X % 2 === 0) {
    return solution(X / 2, count + 1)
  }

};

test('findNumber', () => {
  expect(solution(26)).toEqual(3);
});
