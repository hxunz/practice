// function solution(s) {
//   let words = s.split(' ');

//   const result = words.map((word) => {
//     return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
//   });

//   return result.join(' ');
// }


const solution = (s) => {
  //주어진 문자열을 모두 소문자로 변경한다.
  // 공백을 기준으로 나눈다.
  // 맨 앞글자를 대문자로 바꾼다.
  //이를 다시 합친다.

  const lowerCase = s.toLowerCase();
  const strArr = lowerCase.split(' ');
  const upperCase = strArr.map((it) => it.replace(/^[a-z]/, char => char.toUpperCase()));
  const result = upperCase.join(' ');
  return result;
}


test('JadenCase', () => {
  expect(solution("3people unFollowed me")).toEqual("3people Unfollowed Me");
});
