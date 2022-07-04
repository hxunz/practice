const findX = (sentence) => {
  return sentence[0] === 'x' ? 0 : 1 + findX(sentence.slice(1, sentence.length));
};

test('findX', () => {
  expect(findX('abcdefghijklmnopqrstuvwxyz')).toEqual(23);
  expect(findX('helxo')).toEqual(3);
});
