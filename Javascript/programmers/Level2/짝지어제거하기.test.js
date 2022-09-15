// const solution = (s) => {
//   //  문자열의 인덱스를 순회하면서 문자열을 빈 배열에 넣는다.
//   //   배열에 들어간 문자열이 같다면 pop한다. 

//   let str = [];
//   for (i = 0; i < s.length; i++) {
//     str.push(s[i])
//     if (str[str.length - 1] === str[str.length - 2]) {
//       str.pop()
//       str.pop()
//     }
//   }
//   //   배열의 길이가 0이면 0을 리턴하고 그렇지 않으면 1을 리턴한다.
//   return str.length < 1 ? 1 : 0
// }

const solution = (s) => {
  if (s.length === 0) {
    return 1
  }
  // 먼저 문자열에서 같은 알파벳이 2개 붙어 있는 짝을 찾습니다.
  let same = 0;
  for (i = 1; i < s.length; i++) {
    if (s[i - 1] === s[i]) {
      same = i;
      break;
    }
  }
  if (same === 0) {
    return 0
  }

  // 그다음, 그 둘을 제거한 뒤, 앞뒤로 문자열을 이어 붙입니다.
  return solution(s.slice(0, same - 1) + s.slice(same + 1, s.length))
}

test('removeStr', () => {
  // expect(solution('baabaa')).toEqual(1);
  expect(solution('cdcd')).toEqual(0);
})
