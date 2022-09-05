const solution = (N, M, count = 0) => {
  // 가장 큰 단위의 화폐를 M으로 나눈다.
  const sortN = N.sort((a, b) => b - a);

  // 나누어 떨어진다면 그 값을 리턴
  if (M % sortN[0] === 0) {
    return count + M / sortN[0]
  }

  // 화폐 단위 어떤것으로도 M이 나누어 떨어지지 않는다면 - 1 리턴한다.
  for (i = 0; i < N.length; i++) {
    if (M % N[i] !== 0) {
      return -1
    }
  }

  // 나누어 떨어지지 않는다면 M에서 두번째로 큰 단위의 화폐를 빼고 count+1 하고 1번 반복
  return solution(N, M - sortN[1], count + 1)
};

test('countMoney', () => {
  expect(solution([2, 3], 15)).toEqual(5);
  expect(solution([3, 5, 7], 4)).toEqual(-1);
});
