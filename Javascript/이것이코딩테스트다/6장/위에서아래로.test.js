const solution = (N, arr) => {
  // 주어진 배열을 내림차순으로 정렬한다.
  // 정렬된 결과를 공백으로 구분한다.
  return arr.sort((a, b) => b - a).join(' ');
};

test('sort', () => {
  expect(solution(3, [15, 27, 12])).toEqual('27 15 12');
});
