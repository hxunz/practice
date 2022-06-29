const solution = (arr) => {
  let hashTable = {};

  for (i = 0; i < arr.length; i++) {
    if (hashTable[arr[i]]) {
      return arr[i];
    } else {
      hashTable[arr[i]] = true;
    }
  }
};

test('hashTable', () => {
  expect(solution(['a','b','c','c','d','e','f'])).toEqual('c');
});
