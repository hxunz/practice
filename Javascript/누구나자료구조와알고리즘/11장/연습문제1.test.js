const sumOfWords = (array) => {
  return array.length === 0 ? 0 : array[0].length + sumOfWords(array.slice(1, array.length));
};

test('sumOfWords', () => {
  expect(sumOfWords(['ab', 'c', 'def', 'ghij'])).toEqual(10);
});
