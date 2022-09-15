const solution = (arr) => {
  const numbers = arr.sort((a, b) => a - b);

  let groups = 0;
  let members = 0;
  for (let num of numbers) {
    members++;
    if (members >= num) {
      groups++;
      members = 0
    }
  }

  return groups;
}

test('countGroup', () => {
  expect(solution([2, 3, 1, 2, 2])).toEqual(2)
});
