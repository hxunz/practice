function solution(n) {
  return n.toString().split('').reverse().map((it) => Number(it))
}

test('newArray', () => {
  expect(solution(12345)).toEqual([5, 4, 3, 2, 1]);
});
