// const isPrime = () => {
//   for (j = 2; j <= Math.sqrt(i); j++) {
//     if (i % j === 0) {
//       return false
//     }
//   }
//   return true
// }

// const solution = (n) => {
//   let count = 0;
//   for (i = 2; i <= n; i++) {
//     if (isPrime(i) === true) {
//       count++
//     }
//   }
//   return count;
// }

const solution = (n) => {
  const set = new Set();
  for (i = 2; i <= n; i++) {
    set.add(i);
  }

  for (i = 2; i <= Math.sqrt(n); i++) {
    if (set.has(i)) {
      for (j = i * 2; j <= n; j += i) {
        set.delete(j)
      }
    }
  }

  return set.size
}

test('findPrime', () => {
  expect(solution(10)).toEqual(4);
  expect(solution(5)).toEqual(3);
});
