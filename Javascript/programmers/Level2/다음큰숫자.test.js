const solution = (n, nextNumber = n + 1) => {
  const nBinaryCount = n.toString(2).split('').filter((it) => it === '1').length;
  let nextNumberCount = nextNumber.toString(2).split('').filter((it) => it === '1').length;
  if (nBinaryCount === nextNumberCount) {
    return nextNumber
  }

  return solution(n, nextNumber += 1)
}

test('findNextNumber', () => {
  expect(solution(78)).toEqual(83);
  expect(solution(15)).toEqual(23);
});
