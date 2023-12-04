/**
* ## 이해
*
* 미지의 것: 괄호짝을 검사해주는 기능을 구현하라.
* 자료
*   - 여는 괄호와 닫는 괄호의 짝이 맞아야 컴파일러가 동작을 수행할 수 있다.
    - S : 미니 컴파일러에 입력되는 문자열
    - 괄호의 종류 : ‘[‘, ‘{‘, ‘(‘, ‘)’, ‘}’, ‘]’
    - 호짝이 맞으면 "TRUE", 그렇지 않으면 "FALSE"
* 조건
*   -
*
* ## 계획
*   - 괄호의 짝이 맞는지 확인한다.
    - 맞다면 true
    - 맞지않다면 false를 배열에 넣는다.
    - 배열 내에 false가 하나라도 있다면 false를 리턴한다.
*
* ## 실행
*
* ## 반성
*
*/

const find = (strArr) => {
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === '*' && strArr[i + 1] === '/') {
      return i + 1
    }
  }
}

const checkPair = (strArr) => {
  const bracket = { ')': '(', '}': '{', ']': '[' };
  const stack = [];
  const findStr = find(strArr);
  let newString = '';

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === '/' && strArr[i + 1] === '*') {
      newString = strArr.slice(0, i) + strArr.slice(findStr + 1, strArr.length)
    }
  }

  if (newString.length !== 0) {
    for (let i = 0; i < newString.length; i++) {
      const str = newString[i]

      if (bracket[str] === undefined) {
        stack.push(str)
      } else {
        if (stack[stack.length - 1] !== bracket[str]) {
          return false
        }
        stack.pop()
      }
    }
    if (stack.length) {
      return false
    }
    return true
  }

  for (let i = 0; i < strArr.length; i++) {
    const str = strArr[i]

    if (bracket[str] === undefined) {
      stack.push(str)
    } else {
      if (stack[stack.length - 1] !== bracket[str]) {
        return false
      }
      stack.pop()
    }
  }
  if (stack.length) {
    return false
  }
  return true
}

const solution = (S) => {
  return !checkPair(S) ? 'FALSE' : 'TRUE';
};

test('checkPair', () => {
  expect(checkPair('()')).toEqual(true);
  expect(checkPair('(]')).toEqual(false);
  expect(checkPair('()/*(]*/[]')).toEqual(true);
  expect(checkPair('/*(]*/[]')).toEqual(true);
  expect(checkPair('/*(]*/[]')).toEqual(true);
  expect(checkPair('(/*()}[*/)')).toEqual(true);
  expect(checkPair('(/*(){})[*/]')).toEqual(false);
  expect(checkPair('(/*(){})[*/')).toEqual(false);
  
});

test('solution', () => {
  expect(solution('(){()}[]')).toEqual('TRUE');
});
