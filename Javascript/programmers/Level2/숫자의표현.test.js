// const solution = (n, count = 0, num = 1) => {
//   if (num > n) {
//     return count
//   }
//   // 1부터 n이 될때까지 더한다.
//   let acc = 0;
//   for (i = num; i <= n; i++) {
//     acc += i
//     if (acc === n) {
//       return solution(n, count += 1, num += 1)
//     } else if (acc > n) {
//       return solution(n, count, num += 1)
//     }
//   }
//   // n을 넘어선다면 count + 1을 해주고 숫자도 + 1을 해준다.
//   // 1번 반복
//   // 숫자가 n이 된다면 카운트 값을 리턴한다.
// }

const solution = (n) => {
  let submultiple = [];
  for (i = 1; i <= n; i++) {
    if (n % i === 0 && i % 2 === 1) {
      submultiple.push(i);
    }
  }
  return submultiple.length
}

test('countAcc', () => {
  expect(solution(15)).toEqual(4);
  expect(solution(1)).toEqual(1);
  expect(solution(2)).toEqual(1);
  expect(solution(3)).toEqual(2);
  expect(solution(4)).toEqual(1);
  expect(solution(5)).toEqual(2);
  expect(solution(6)).toEqual(2);
});
