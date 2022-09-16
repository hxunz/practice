const solution = (people, limit) => {
  const peopleArr = people.sort((a, b) => b - a);

  let start = 0;
  let end = peopleArr.length - 1;
  let count = 0;

  while (start <= end) {
    if ((peopleArr[start] + peopleArr[end]) > limit) {
      start += 1;
      count++;
    } else {
      start += 1;
      end -= 1;
      count++;
    }
  }

  return count
}

test('countBoat', () => {
  expect(solution([70, 50, 80, 50], 100)).toEqual(3);
  expect(solution([70, 80, 50], 100)).toEqual(3);
})