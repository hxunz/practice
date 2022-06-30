const solution = (str) => {
  let pushStr = [];
  for (i = 0; i < str.length; i++) {
    pushStr.push(str[i]);
  }

  let popStr = [];
  for (j = pushStr.length-1; j >= 0; j--) {
    popStr += pushStr.pop(pushStr[j]);
  }
  return popStr;
}

test('stack', () => {
  expect(solution('abcde')).toEqual('edcba');
});
