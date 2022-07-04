const solution = (str) => {
  let hashTable = {};

  for (i = 0; i < str.length; i++) {
    hashTable[str[i]] = true;
  }

  let alphabet = 'abcdefghijklmnopqrstuvxyz';
  
  for (i = 0; i < alphabet.length; i++) {
    if (!hashTable[alphabet[i]]) {
      return alphabet[i];
    }
  }
};

test('hashTable', () => {
  expect(solution('the quick brown box jumps over a lazy dog')).toEqual('f');
});
