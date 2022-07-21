const solution = (arr, divisor) => {
  const newArr = arr.filter(number => number % divisor === 0).sort((a,b) => a-b);

  return (newArr.length > 0) ? newArr : [-1];
};

test('divide', () => {
  expect(solution([5, 9, 7, 10],5)).toEqual([5, 10]);
});
