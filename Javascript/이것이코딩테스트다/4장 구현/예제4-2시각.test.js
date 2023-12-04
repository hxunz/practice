const solution = (N) => {
  // 3시 일때 -> 3이 3600번
  // 3시가 아닐때 1분에 3이 15번 있으니까 1시간에 3이 15 * 60번

  let count = 0;

  for (i = 1; i <= N; i++) {
    if (i === 3) {
      count += 3600;
    } else {
      count += 15 * 60;
    }
    console.log('count::: ', count);
  }
};

test('countThree', () => {
  expect(solution(5)).toEqual(11475);
});
