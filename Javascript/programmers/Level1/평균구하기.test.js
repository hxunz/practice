function solution(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0) / arr.length
}

test('평균구하기', () => {
  expect(solution([1, 2, 3, 4])).toEqual(2.5);
});
