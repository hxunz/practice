const solution = (n, times) => {
  let minTime = 0;
  let maxTime = Math.max(...times) * n;

  while (minTime < maxTime) {
    let midTime = Math.floor((minTime + maxTime) / 2);

    const peopleCount = times.reduce((acc, cur) => {
      return acc + Math.floor(midTime / cur);
    }, 0);

    console.log(minTime, midTime, maxTime, peopleCount);

    if (peopleCount >= n) {
      maxTime = midTime;
    } else {
      minTime = midTime + 1;
    }
  }

  console.log(minTime, maxTime);

  return minTime;
};

test('totalTime', () => {
  // expect(solution(6, [7, 10])).toEqual(28);
  expect(solution(6, [4, 10])).toEqual(20);
});
