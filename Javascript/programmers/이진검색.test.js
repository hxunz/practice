const solution = (number, search_value) => {
  let numbers = [];
  for (num = 1; num <= number; num++) {
    numbers.push(num);
  }

  let lowerBound = 0;
  let upperBound = numbers.length - 1;

  while (lowerBound <= upperBound) {
    let midPoint = (upperBound + lowerBound) / 2
    
    if (search_value === numbers[midPoint]) {
      return midPoint;
    } else {
      if (search_value < numbers[midPoint]) {
        upperBound = midPoint - 1
      } else {
        lowerBound = midPoint + 1
      }
    }
  }
  return -1
};

test('count', () => {
  expect(solution(100000,2)).toEqual(16)
});
