const solution = (s, change = 0, count = 0) => {
  if (s === '1') {
    return [change, count]
  }

  //s의 0의 개수를 구한다
  let countZero = s.split('').filter((it) => it === '0').length;
  // s의 모든 0을 제거합니다.
  let removeZero = s.split('').filter((it) => it !== '0').join('');
  // s의  길이를 c라고 하면, s를 "c를 2진법으로 표현한 문자열"로 바꿉니다.
  let binary = removeZero.length.toString(2);

  return solution(binary, change += 1, count += countZero)
}

// const solution = (s) => {
//   let change = 0;
//   let count = 0;

//   while (s !== '1') {
//     for (i = 0; i < s.split('').length; i++) {
//       if (s[i] === '0') {
//         count++
//       }
//     }
//     change++;
//     s = s.split('').filter((it) => it !== '0').join('').length.toString(2);
//   }

//   return [change, count]
// }

test('changeBinary', () => {
  expect(solution("110010101001")).toEqual([3, 8]);
});
