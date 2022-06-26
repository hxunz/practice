const solution = (numbers) => {
  // bubble sort and reverse
  // for (i = 0; i < numbers.length - 1; i++) {
  //   for (j = i + 1; j < numbers.length; j++) {
  //     if (Number.parseInt(`${numbers[i]}${numbers[j]}`) > Number.parseInt(`${numbers[j]}${numbers[i]}`)) {
  //       const temp = numbers[j];
  //       numbers[j] = numbers[i];
  //       numbers[i] = temp;
  //     }
  //   }
  // }
  // return numbers.reverse().join('');

  if (numbers.every(cur => cur === 0)) return '0'; 
  const number = numbers.sort((a, b) => {
    return `${b}${a}` - `${a}${b}`
  });
  return number.join('');
};

test('findNumber', () => {
  // expect(solution([1, 2])).toEqual('21');
  expect(solution([6, 10, 2])).toEqual("6210");
  expect(solution([101, 10, 232, 23])).toEqual('2323210110');
});

// 6, 10 -> 106-610 -> 6
//10,2 -> 210-102 -> 2



test('findNumber', () => {
  expect(solution([3, 30, 34, 5, 9])).toEqual('9534330');
});
// 9 3 30 34 5
// 9 5 3 30 34

test('findNumber', () => {
  expect(solution([3, 55, 51, 5, 9])).toEqual('9555513');
  expect(solution([3, 56, 51, 5, 9])).toEqual('9565513');
  expect(solution([3, 53, 51, 5, 9])).toEqual('9553513');
  expect(solution([3, 56, 579, 5, 9])).toEqual('95795653');
});