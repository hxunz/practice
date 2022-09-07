function solution(s) {
  if (s.length === 4 || s.length === 6) {
    const str = s.replace(/[a-z]/gi, '');
    return s.length === str.length ? true : false
  } else {
    return false
  }
}

test('findStr', () => {
  expect(solution("a234")).toEqual(false);
});
