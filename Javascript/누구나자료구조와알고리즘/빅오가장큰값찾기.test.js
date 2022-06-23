const greatestNumber = (array) => {
  let max = 0;
  for (i = 0; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }
};

test('findNumber', () => {
  expect(greatestNumber([1, 2, 3, 4, 5])).toEqual(5);
});

