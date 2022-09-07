function solution(s) {
  return parseInt(s)
}

test('numberToString', () => {
  expect(solution("1234")).toEqual(1234);
});
