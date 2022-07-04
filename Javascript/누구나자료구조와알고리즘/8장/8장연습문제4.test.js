const solution = (str) => {
  let hashTable = {};

  for (i = 0; i < str.length; i++) {
    if (hashTable[str[i]]) {
      hashTable[str[i]]++
    } else {
      hashTable[str[i]] = 1;
    }
  }
  
  for (j = 0; j < str.length; j++) {
    if (hashTable[str[j]] === 1) {
      return str[j];
    }
  }
};

test('hashTable', () => {
  expect(solution('minimum')).toEqual('n');
});
