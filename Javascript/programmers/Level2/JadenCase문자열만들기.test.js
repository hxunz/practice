function solution(s) {
  let words = s.split(' ');

  const result = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
  });

  return result.join(' ');
}

test('JadenCase', () => {
  expect(solution("3people unFollowed me")).toEqual("3people Unfollowed Me");
});
