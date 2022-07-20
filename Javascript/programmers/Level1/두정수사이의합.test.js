// const solution = (a, b) => {
//   let numbers = [];

//   if (a < b) {
//       for (num = a; num <= b; num++) {
//       numbers.push(num);
//     }
//   } else {
//     for (num = b; num <= a; num++) {
//       numbers.push(num);
//     }
//   }

//   return numbers.reduce((acc, cur) => acc + cur, 0);
// };

const solution = (a, b) => {
  return (a + b) * (Math.abs(b - a) + 1) / 2;
};

test('sumNumbers', () => {
  expect(solution(3, 5)).toEqual(12);
  expect(solution(5,3)).toEqual(12);
});
