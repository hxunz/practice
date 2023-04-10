/**
* ## 이해
*
* 미지의 것: 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return
* 자료
*   - 괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다.
* 조건
*   -
*
* ## 계획
*   - s를 순회하면서 (가 나오면 스택에 넣었다가 )가 나오면 스택에서 뺸다.
    - s 순회가 다 끝났는데 스택이 비어있으면 true 비어있지 않으면 false를 리턴한다.
*
* ## 실행
*
* ## 반성
*
*/

const solution = (s) => {
  let stack = [];

  if (s[0] === ')' || s[s.length - 1] === '(') {
    return false;
  }

  const half = Math.floor(s.length / 2);

  for (let i = 0; i < s.length; i++) {
    if (i > half && stack.length >= half) {
      return false;
    }
    if (s[i] === '(') {
      stack.push('(')
    }
    if (s[i] === ')') {
      stack.pop()
    }
  }

  return stack.length === 0 ? true : false;
};

test('solution', () => {
  expect(solution("()()")).toBe(true);
  expect(solution("(())()")).toBe(true);
  expect(solution(")()(")).toBe(false);
  expect(solution("(()(")).toBe(false);
  expect(solution("(")).toBe(false);
  expect(solution(")")).toBe(false);
});
