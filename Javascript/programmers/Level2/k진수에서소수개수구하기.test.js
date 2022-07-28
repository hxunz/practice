const findPrime = (numbers) => {
  let primeCount = 0;

  for (i = 0; i < numbers.length; i++) {
    let isNotPrime = false;
      for (j = 2; j <= Math.floor(Math.sqrt(numbers[i])); j++) {
        if (numbers[i] % j === 0) {
          isNotPrime = true;
        } 
      }
    if (isNotPrime === false) {
      primeCount += 1;
    }
  }
    return primeCount;
};

const solution = (n, k) => {
  const number = n.toString(k);
  const arr = number.split(0).filter(it => it !== '1' && it !== '');
  return findPrime(arr);
};

test('findPrime', () => {
  expect(solution(437674, 3)).toEqual(3);
  expect(solution(110011, 10)).toEqual(2);
});
