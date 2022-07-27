const solution = (strings, n) => {
  const sortWords = strings.sort((a, b) => {
    return a[n] === b[n] ? (a < b ? -1 : 1) : (a[n] < b[n] ? -1 : 1);
  });
  return sortWords;
};

test('sortWords', () => {
  expect(solution(["sun", "bed", "car"], 1)).toEqual(["car", "bed", "sun"]);
  expect(solution(["abce", "abcd", "cdx"], 2)).toEqual(["abcd", "abce", "cdx"]);
});

