function solution(s) {
  return s.split(' ')
    .map((it) => it.split(''))
    .map((it) => it.map((word, index) => {
      if (index % 2 === 0) {
        return word.toUpperCase()
      } else {
        return word.toLowerCase()
      }
    }))
    .map((el) => el.join(''))
    .join(' ')
}

test('newString', () => {
  expect(solution("try hello world")).toEqual("TrY HeLlO WoRlD");
  expect(solution("abc abcd abcde")).toEqual("AbC AbCd AbCdE");
});
