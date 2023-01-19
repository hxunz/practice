const solution = (k, m, score) => {
  const scores = score.sort((a, b) => b - a);

  let answer = 0;

  for (let i = m - 1; i < scores.length; i += m) {
    answer += (scores[i] * m)
  }

  return answer;
};

test('solution', () => {
  expect(solution(3, 4, [1, 2, 3, 1, 2, 3, 1])).toEqual(8);
  expect(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2])).toEqual(33);
  expect(solution(4, 4, [4, 4, 3, 3, 3, 2, 2, 2, 1])).toEqual(20);
  expect(solution(9, 2, [7, 7, 6, 5, 2])).toEqual(24);
  expect(solution(7, 2, [7, 7, 5, 3, 3, 3, 1])).toEqual(26);
});
