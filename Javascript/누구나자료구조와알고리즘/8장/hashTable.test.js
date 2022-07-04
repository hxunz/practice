const hashTable = () => {
  let alphabet = {};
  for (i = 1; i <= 26; i++) {
    let values = i - 1;
    let keys = 64 + i;

    if (values <= 25) {
      alphabet[String.fromCharCode(keys)] = values;
    }
  }
  console.log('alphabet::: ', alphabet);

  
};

test('hashTable', () => {
  expect(hashTable('bad')).toEqual('evil');
});
