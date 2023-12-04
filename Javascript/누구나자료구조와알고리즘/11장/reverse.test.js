const reverse = (string) => {
  if (string.length === 1) {
    return string;
  } else {
  return reverse(string.substring(1)) + string[0];
  }
};

test('reverse', () => {
  expect(reverse('abcde')).toEqual('edcba')
});