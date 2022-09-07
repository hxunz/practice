function solution(n) {
  const num = Math.sqrt(n);
  if (Number.isInteger(num) === true) {
    return Math.pow(num + 1, 2)
  } else {
    return -1
  }
}

test('number', () => {
  expect(solution(121)).toEqual(144);
});
