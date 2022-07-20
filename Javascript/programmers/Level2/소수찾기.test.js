const findPrime = (numbers) => {
  const set = new Set(numbers);
  const uniqueNumbers = [...set];

  let primeCount = 0;

  for (i = 0; i < uniqueNumbers.length; i++) {
    let isNotPrime = false;
      for (j = 2; j <= Math.floor(Math.sqrt(uniqueNumbers[i])); j++) {
        if (uniqueNumbers[i] % j === 0) {
          isNotPrime = true;
        } 
      }
    if (isNotPrime === false) {
      primeCount += 1;
    }
  }
    return primeCount;
};


const solution = (string) => {
  const strArr = [...string];
  function getPermutations(strArr, numberOfPermutations) {
    if (numberOfPermutations === 0) {
      return [];
    }

    if (numberOfPermutations === 1) {
      return strArr.map(number => [number]);
    }

    const permutations = [];
    for (let i = 0; i < strArr.length; i++) {
      const number = strArr[i];
      const remainingNumbers = strArr.slice(0, i).concat(strArr.slice(i + 1));
      const subPermutations = getPermutations(remainingNumbers, numberOfPermutations - 1);
      subPermutations.forEach(subPermutation => {
        permutations.push([number].concat(subPermutation));
      });
    }

    return permutations;
  }

  const result = [];
  for (let i = 0; i < strArr.length; i++) {
    result.push(getPermutations(strArr, i + 1));
  }

  return findPrime(result.flat().map(arr => Number(arr.join(''))).filter(num => num !== 1 && num !== 0));
};

test('findPrime', () => {
  expect(solution('17')).toEqual(3);
  expect(solution('011')).toEqual(2);
});
