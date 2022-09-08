const solution = (x, n) => {
  let sum = 0;
  let arr = [];
  while (arr.length < n) {
    sum += x;
    arr.push(sum);
  }

  return arr
}

test('sumNumber', () => {
  expect(solution(2, 5)).toEqual([2, 4, 6, 8, 10]);
});
