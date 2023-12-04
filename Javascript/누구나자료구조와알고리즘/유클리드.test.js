function euclidean(a, b) {
  let num1 = Math.abs(a);
  let num2 = Math.abs(b);

  while (num2 !== 0) {
    const remainder = num1 % num2;

    num1 = num2;
    num2 = remainder;
  }

  return num1;
}

test('euclidean', () => {
  expect(euclidean(48, 18)).toEqual(6);
  expect(euclidean(2, 3)).toEqual(1);
})
