const solution = (numbers) => {
  let count = [];

  for (i = 0; i < numbers.length; i++) {
    for (j = i + 1; j < numbers.length; j++) {
      count.push(numbers[i] + numbers[j])
    }
  }

  const set = new Set(count);
  return [...set].sort((a, b) => a - b);
};

test('sum', () => {
  expect(solution([2, 1, 3, 4, 1])).toEqual([2, 3, 4, 5, 6, 7]);
  expect(solution([1, 2])).toEqual([3]);
  expect(solution([1, 2, 3])).toEqual([3, 4, 5]);
});
