// const fibonacci = (n) => {
//   let numbers = [0, 1];
//   for (i = 2; i <= n; i++) {
//     numbers.push((numbers[i - 1] % 1234567) + (numbers[i - 2] % 1234567) % 1234567);
//   }

//   return numbers[n] % 1234567;
// };


const fibonacci = (n) => {
  let nums = [0, 1];
  while (nums.length <= n) {
    nums.push((nums[nums.length - 2] + nums[nums.length - 1]) % 1234567);
  }
  return nums[n] % 1234567;
};





test('fibonacci', () => {
  expect(fibonacci(3)).toEqual(2);
  expect(fibonacci(5)).toEqual(5);
});
