// function solution(s) {
//   let words = s.split(' ');

//   const result = words.map((word) => {
//     return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
//   });

//   return result.join(' ');
// }


// const solution = (s) => {
//   //주어진 문자열을 모두 소문자로 변경한다.
//   // 공백을 기준으로 나눈다.
//   // 맨 앞글자를 대문자로 바꾼다.
//   //이를 다시 합친다.

//   const lowerCase = s.toLowerCase();
//   const strArr = lowerCase.split(' ');
//   const upperCase = strArr.map((it) => it.replace(/^[a-z]/, str => str.toUpperCase()));
//   const result = upperCase.join(' ');
//   return result;
// }

const solution = (s) => {
  // 문자열을 하나씩 순회한다.
  // 제일 첫번째 문자열은 무조건 대문자로 바꾸고
  // 공백 전의 문자들은 소문자로 바꾸고
  // 공백 이후의 문자 하나는 대문자로 바꾼다.
  let newStr = '';
  newStr += (s[0].toUpperCase());

  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] === ' ' && s[i] !== ' ') {
      newStr += (s[i].toUpperCase());
    } else {
      newStr += (s[i].toLowerCase());
    }
  };

  return newStr;
}


test('JadenCase', () => {
  expect(solution("3people unFollowed me")).toEqual("3people Unfollowed Me");
  expect(solution("a")).toEqual("A");
});
