const solution = (n, left, right) => {
  let arr = [];

  for (i = left; i <= right; i++) {
    let compare = [];
    let divide = Math.floor(i / n);
    compare.push(divide);
    let share = i % n;
    compare.push(share);
    arr.push(Math.max(...compare) + 1)
  }

  return arr;
}

test('cutArray', () => {
  expect(solution(3, 2, 5)).toEqual([3, 2, 2, 3]);
});
