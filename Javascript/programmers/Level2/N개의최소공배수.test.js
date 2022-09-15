const gcd = (minNumber, maxNumber) => {
  //  두 수 중에서 큰 수를 작은 수로 나눈다.
  //   만약 나누고 난 나머지가 0 이라면 작은 수가 최대공약수이다.
  //   만약 나머지가 0 이 아니라면, 작은 수를 다시 나머지로 나눈다.
  //   이를 반복해서 나머지가 0 이 될 때, 그 수가 바로 두 수의 최대공약수이다.
  while (maxNumber !== 0) {
    n = minNumber % maxNumber;
    minNumber = maxNumber;
    maxNumber = n;
  }
  return minNumber;
}

const lcm = (minNumber, maxNumber) => {
  return (minNumber * maxNumber) / gcd(minNumber, maxNumber);
}

const solution = (arr) => {
  let answer = 1;
  for (let i = 0; i < arr.length; i++) {
    answer = lcm(answer, arr[i]);
  }

  return answer;
}

test('trueOrFalse', () => {
  expect(solution([2, 6, 8, 14])).toEqual(168);
})