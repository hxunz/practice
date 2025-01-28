const solution = (nums) => {
  if (nums.length === 0) return 0;

  let k = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k]) {
      k++;
      nums[k] = nums[i];
    }
  }

  return k + 1;
};

test('Remove Duplicates from Sorted Array', () => {
  expect(solution([1, 1, 2])).toEqual(2);
  expect(solution([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toEqual(5);
});
