const solution = (num, count = 0) => {
  if (count > 500) {
    return -1
  }
  if (num === 1) {
    return count
  }
  // 1 - 1. 입력된 수가 짝수라면 2로 나눕니다. 
  if (num % 2 === 0) {
    return solution(num / 2, count + 1)
  }
  // 1 - 2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다. 
  if (num % 2 === 1) {
    return solution(num * 3 + 1, count + 1)
  }
  // 2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.
  // 단, 주어진 수가 1인 경우에는 0을, 작업을 500번 반복할 때까지 1이 되지 않는다면 –1을 반환해
  if (num === 1) {
    return 0
  }
}

test('count', () => {
  expect(solution(6)).toEqual(8);
});
