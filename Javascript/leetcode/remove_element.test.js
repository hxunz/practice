const solution = (nums, val) => {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[result] = nums[i];
      result += 1
    }
  }

  return result;
};

test('removeElement', () => {
  expect(solution([3, 2, 2, 3], 3)).toEqual(2);
});
