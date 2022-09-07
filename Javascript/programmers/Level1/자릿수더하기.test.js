function solution(n) {
  return n.toString().split('').reduce((acc, cur) => acc + Number(cur), 0)
}

test('count', () => {
  expect(solution(123)).toEqual(6);
});
