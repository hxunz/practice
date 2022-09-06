const solution = (route, K, X) => {
  let count = 0;

  // 1번에서 K번까지 가는 최단 경로를 구하라
  const arr = route.filter(it => it[0] === 1);

  let kRoute = [];
  if (arr.some((it) => it[1] === K)) {
    count++
  } else {
    for (i = 0; i < arr.length; i++) {
      kRoute.push(route.filter(it => it[0] === arr[i][1]))
    }
    count++
  }

  if (kRoute.length === 0) {
    return -1
  }

  const routeK = kRoute.reduce((acc, cur) => [...acc, ...cur]);
  if (routeK.some((it) => it[1] === K)) {
    count++
  }

  // K에서 X번까지 가는 최단 경로를 구하라
  let xRoute = [];
  if (route.some((it) => it[0] === K)) {
    xRoute.push(route.filter((it) => it[0] === K))
  } else {
    xRoute.push(route.filter((it) => it[1] === K))
  }

  const routeX = xRoute.reduce((acc, cur) => [...acc, ...cur]);
  if (routeX.some((it) => it[0] === X || it[1] === X)) {
    count++
  }
  return count
};

test('countMoney', () => {
  expect(solution([[1, 2], [1, 3], [1, 4], [2, 4], [3, 4], [3, 5], [4, 5]], 5, 4)).toEqual(3);
  expect(solution([[1, 3], [2, 4]], 3, 4)).toEqual(-1);
});
