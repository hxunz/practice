/**
* ## 이해
*
* 미지의 것: s를 JadenCase로 바꾼 문자열을 리턴
* 자료
*   - JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열
    - 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자로 쓰면 됩니다.
    - s는 알파벳과 숫자, 공백문자(" ")로 이루어져 있습니다.
      숫자는 단어의 첫 문자로만 나옵니다.
      숫자로만 이루어진 단어는 없습니다.
      공백문자가 연속해서 나올 수 있습니다.
* 조건
*   -
*
* ## 계획
*   - 문자열을 쪼갠디.
    - 첫번째 문자열이 숫자가 아니라면 대문자로 바꾼다.
    - 다시 합쳐서 리턴한다.
*
* ## 실행
*
* ## 반성
*
*/

const solution = (s) => {
  return s.split(' ').map((s) => {
    if (s.match(/^[a-zA-Z]/)) {
      return s[0].toUpperCase() + s.slice(1).toLowerCase()
    }
    return s.toLowerCase();
  }).join(' ');
};

test('solution', () => {
  expect(solution("3people unFollowed me")).toBe("3people Unfollowed Me")
  expect(solution("3People unFollowed me")).toBe("3people Unfollowed Me")
  expect(solution("for the last week")).toBe("For The Last Week")
  expect(solution("for  the")).toBe("For  The")
  expect(solution("For the")).toBe("For The")
});
