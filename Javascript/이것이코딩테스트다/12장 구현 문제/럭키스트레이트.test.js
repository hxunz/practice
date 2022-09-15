// const solution = (N) => {
//   // N을 쪼개서 배열로 만든다.
//   const num = N.toString().split('').map((it) => Number(it));
//   console.log('num::: ', num);

//   // 이를 인덱스0부터 절반까지 순회한 것과 절반부터 마지막 인덱스까지 순회한 것을 비교한다.
//   let left = 0;
//   let right = 0;

//   for (i = 0; i < num.length / 2; i++) {
//     left += num[i]
//   }
//   for (i = num.length / 2; i < num.length; i++) {
//     right += num[i]
//   }

//   // 같으면 LUCKY를 리턴하고 같지 않으면 READY를 리턴한다.
//   return left === right ? 'LUCKY' : 'READY'
// }

const solution = (N) => {
  // N을 쪼개서 배열로 만든다.
  const num = N.toString().split('').map((it) => Number(it));

  // 이를 인덱스0부터 절반까지 순회한 것과 절반부터 마지막 인덱스까지 순회한 것을 비교한다.
  const left = num.slice(0, num.length / 2).reduce((acc, cur) => acc + cur);
  const right = num.slice(num.length / 2).reduce((acc, cur) => acc + cur);

  // 같으면 LUCKY를 리턴하고 같지 않으면 READY를 리턴한다.
  return left === right ? 'LUCKY' : 'READY'
}

test('luckyOrReady', () => {
  expect(solution(123402)).toEqual('LUCKY');
  expect(solution(7755)).toEqual('READY');
})