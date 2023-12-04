const solution = (a, k) => {
  const sumArray = (arr) => {
    return arr.reduce((a, b) => a + b, 0);
  };

  let arr = [];
  for (i = 0; i <= a.length; i++) {
    for (j = i + 1; j <= a.length; j++) {
      if (j - i > arr.length && sumArray(a.slice(i, j)) <= k) {
        arr = a.slice(i, j);
      }
    }
  }
  return arr.length;
};

test('result', () => {
  // expect(solution([1,2,3], 4)).toEqual(2);
  expect(solution([3, 1, 2, 1], 4)).toEqual(3);
});
