const solution = (N) => {
  // N이 5로 나누어 떨어지면 그 값을 리턴한다.
  if (N % 5 === 0) {
    return N / 5
  }


  let count = 0;
  let sum = 0;
  // 5를 더하면서 count + 1을 해준다.이때, 합계가 N을 넘지 않도록 한다.
  while (sum < N - 5) {
    sum += 5;
    count++;
    if ((N - 5) % 3 === 0) {
      break;
    }
  }
  // console.log('count::: ', count);
  // console.log('sum::: ', sum);

  // N이 3으로 나누어 떨어지면 그 값을 리턴한다.
  if (N % 3 === 0) {
    if (count > N / 3 || (N - sum) < 3 || (N - sum) % 3 !== 0) {
      return N / 3
    }
  }


  // 남은 값을 3으로 나눴을때 나누어 떨어지면 이 값과 count 값을 더한 후 리턴한다.
  if ((N - sum) % 3 === 0) {
    return count + ((N - sum) / 3)
  }

  //들고 갈 봉지가 없으면 -1 리턴
  return -1
}

test('countBag', () => {
  expect(solution(18)).toEqual(4);
  expect(solution(4)).toEqual(-1);
  expect(solution(6)).toEqual(2);
  expect(solution(9)).toEqual(3);
  expect(solution(11)).toEqual(3);
});
