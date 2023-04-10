/**
* ## 이해
*
* 미지의 것: str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환
* 자료
*   - 예를들어 s가 "1 2 3 4"라면 "1 4"를 리턴하고, "-1 -2 -3 -4"라면 "-4 -1"을 리턴하면 됩니다.
* 조건
*   -
*
* ## 계획
*   -
*
* ## 실행
*
* ## 반성
*
*/
const solution = (s) => {
  const str = s.split(' ').sort((a, b) => a - b);
  return str[0] + ' ' + str[str.length - 1]
};

test('solution', () => {
  expect(solution('1 2 3 4')).toBe('1 4');
  expect(solution("-1 -2 -3 -4")).toBe('-4 -1');
  expect(solution("-1 -1")).toBe("-1 -1");
})