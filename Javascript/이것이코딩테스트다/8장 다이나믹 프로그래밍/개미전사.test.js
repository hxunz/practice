const solution = (K) => {
  // 홀수번에 있는 식량 창고를 털 경우
  // 털 수 있는 식량창고의 인덱스는 1, 3, 5, 7 ...
  // K의 홀수번 인덱스를 순회하면서 더한다.
  const odd = K.reduce((acc, cur, i) => {
    if (i % 2) acc.push(cur);
    return acc;
  }, [])
    .reduce((acc, cur) => acc + cur, 0);

  // 짝수번에 있는 식량 창고를 털 경우
  // 털 수 있는 식량 창고의 인덱스는 2, 4, 6, 8 ...
  // K의 짝수번 인덱스를 순회하면서 더한다.
  const even = K.reduce((acc, cur, i) => {
    if (i % 2 === 0) acc.push(cur);
    return acc;
  }, [])
    .reduce((acc, cur) => acc + cur, 0);

  // 둘 중에 더 큰 값을 리턴한다.
  return odd > even ? odd : even
};

test('foodValue', () => {
  expect(solution([1, 3, 1, 5])).toEqual(8);
});
