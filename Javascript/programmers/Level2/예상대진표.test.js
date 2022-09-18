// const solution = (n, a, b) => {
//   let count = 0;
//   while (a !== b) {
//     a = Math.ceil(a / 2);
//     b = Math.ceil(b / 2);
//     count++;
//   }
//   return count;
// };

const solution = (n, a, b, count = 0) => {
  if (a === b) {
    return count;
  }
  return solution(n, Math.ceil(a / 2), Math.ceil(b / 2), count += 1)
}

test('', () => {
  expect(solution(8, 4, 7)).toEqual(3);
});
