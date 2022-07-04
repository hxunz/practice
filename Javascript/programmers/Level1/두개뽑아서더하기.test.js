const solution = (numbers) => {
  let count = [];
  
  for (i = 1; i < numbers.length; i++) {
    count.push(numbers[0] + numbers[i])
    count.push(numbers[i]+numbers[i+1])
  }
  // return [numbers[0] + numbers[1]]
  // return [numbers[0] + numbers[1], numbers[0] + numbers[2], numbers[1] + numbers[2]]
  console.log('count::: ', count);
};

test('sum', () => {
  expect(solution([2,1,3,4,1])).toEqual([2,3,4,5,6,7]);
  // expect(solution([1,2])).toEqual([3]);
  // expect(solution([1, 2, 3])).toEqual([3, 4, 5]);
});
