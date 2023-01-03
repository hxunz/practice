const solution = (k, tangerine) => {
  const tangerineKind = tangerine.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc
  }, {});

  const tangerineSort = Object.values(tangerineKind).sort((a, b) => b - a);

  let minTangerines = [];
  let sum = 0;

  // for (let i = 0; i < tangerineSort.length; i++) {
  //   sum += tangerineSort[i]
  //   minTangerines.push(tangerineSort[i])

  //   if (sum >= k) break;
  // }

  for (const it of tangerineSort) {
    minTangerines.push(it);
    if (k > it) k -= it;
    else break;
  }

  return minTangerines.length;
};

test('choose tangerine', () => {
  expect(solution(6, [1, 3, 2, 5, 4, 5, 2, 3])).toEqual(3);
  expect(solution(4, [1, 3, 2, 5, 4, 5, 2, 3])).toEqual(2);
  expect(solution(2, [1, 1, 1, 1, 2, 2, 2, 3])).toEqual(1);
});
